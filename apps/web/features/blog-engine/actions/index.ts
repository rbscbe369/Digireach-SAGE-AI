'use server';

import { prisma } from '@sagemodules/database';
import { BlogEngineDashboardData, BlogProjectData } from '../types';

/**
 * Helper to call the Groq Completion API
 */
async function callGroq(prompt: string, systemPrompt?: string): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('Groq API Key is not configured in environment variables.');
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: systemPrompt || 'You are an expert SEO content strategist and writer.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 3000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || '';
}

/**
 * Server Action: Load Blog Engine Dashboard
 */
export async function loadBlogDashboardAction(organizationId: string): Promise<BlogEngineDashboardData> {
  let orgId = organizationId;
  
  if (orgId === 'pending-org-id') {
    const firstOrg = await prisma.organization.findFirst();
    if (!firstOrg) {
      throw new Error('No organization registered. Seed the database first.');
    }
    orgId = firstOrg.id;
  }

  const [totalBlogs, draftsCount, inReviewCount, publishedCount, recentBlogs] = await Promise.all([
    prisma.blogProject.count({ where: { organizationId: orgId } }),
    prisma.blogProject.count({ where: { organizationId: orgId, status: 'DRAFT' } }),
    prisma.blogProject.count({ where: { organizationId: orgId, status: 'IN_REVIEW' } }),
    prisma.blogProject.count({ where: { organizationId: orgId, status: 'PUBLISHED' } }),
    prisma.blogProject.findMany({
      where: { organizationId: orgId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
  ]);

  return {
    totalBlogs,
    draftsCount,
    inReviewCount,
    publishedCount,
    recentBlogs: recentBlogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      goal: blog.goal as any,
      targetAudience: blog.targetAudience,
      brandVoice: blog.brandVoice,
      status: blog.status as any,
      wordCount: blog.wordCount,
      seoScore: blog.seoScore,
      qualityScore: blog.qualityScore,
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
    })),
  };
}

/**
 * Server Action: Create Blog Project Entry
 */
export async function createBlogAction(data: {
  title: string;
  goal: string;
  targetAudience: string;
  brandVoice: string;
  targetLength: string;
}): Promise<any> {
  const firstOrg = await prisma.organization.findFirst();
  if (!firstOrg) {
    throw new Error('No organization registered. Seed the database first.');
  }

  const blog = await prisma.blogProject.create({
    data: {
      organizationId: firstOrg.id,
      title: data.title,
      goal: data.goal,
      targetAudience: data.targetAudience,
      brandVoice: data.brandVoice,
      targetLength: data.targetLength,
      status: 'DRAFT',
    },
  });

  return {
    id: blog.id,
    title: blog.title,
    goal: blog.goal,
    status: blog.status,
    createdAt: blog.createdAt.toISOString(),
  };
}

/**
 * Server Action: Generate Outline using Groq
 */
export async function generateOutlineAction(blogId: string): Promise<any> {
  const blog = await prisma.blogProject.findUnique({
    where: { id: blogId },
  });

  if (!blog) throw new Error('Blog project not found.');

  await prisma.blogProject.update({
    where: { id: blogId },
    data: { status: 'GENERATING' },
  });

  const prompt = `Generate an SEO blog outline for a post with the following details:
  - Title/Keyword: "${blog.title}"
  - Goal: "${blog.goal}"
  - Target Audience: "${blog.targetAudience}"
  - Brand Voice: "${blog.brandVoice}"
  - Target Length: "${blog.targetLength}"

  You must return a JSON object (and absolutely nothing else, no markdown wrappers, no backticks) matching this JSON structure:
  {
    "seoTitle": "string",
    "altTitles": ["string", "string"],
    "slug": "string",
    "metaDescription": "string",
    "h1": "string",
    "structure": [
      { "heading": "Introduction", "headingLevel": 2 },
      { "heading": "Heading 2", "headingLevel": 2 },
      { "heading": "Heading 3", "headingLevel": 3 },
      { "heading": "Conclusion", "headingLevel": 2 }
    ],
    "estWordCount": 1000,
    "estReadingTime": 5.0,
    "estSeoDifficulty": 30
  }`;

  try {
    const rawResponse = await callGroq(prompt, 'You are a strict JSON generator. Return raw JSON.');
    
    const startIdx = rawResponse.indexOf('{');
    const endIdx = rawResponse.lastIndexOf('}');
    if (startIdx === -1 || endIdx === -1) {
      throw new Error(`Failed to extract JSON object from Groq: ${rawResponse}`);
    }
    const jsonString = rawResponse.substring(startIdx, endIdx + 1);
    const outlineData = JSON.parse(jsonString);

    const outline = await prisma.blogOutline.create({
      data: {
        blogId,
        seoTitle: outlineData.seoTitle,
        altTitles: outlineData.altTitles || [],
        slug: outlineData.slug || 'slug-placeholder',
        metaDescription: outlineData.metaDescription || '',
        h1: outlineData.h1 || blog.title,
        structure: outlineData.structure || [],
        estWordCount: Number(outlineData.estWordCount) || 1200,
        estReadingTime: Number(outlineData.estReadingTime) || 6,
        estSeoDifficulty: Number(outlineData.estSeoDifficulty) || 40,
      },
    });

    await prisma.blogProject.update({
      where: { id: blogId },
      data: { status: 'IN_REVIEW' },
    });

    return {
      id: outline.id,
      seoTitle: outline.seoTitle,
      metaDescription: outline.metaDescription,
      h1: outline.h1,
      structure: outline.structure,
    };
  } catch (error) {
    await prisma.blogProject.update({
      where: { id: blogId },
      data: { status: 'DRAFT' },
    });
    throw error;
  }
}

/**
 * Server Action: Generate Full Content using Groq
 */
export async function generateBlogAction(blogId: string): Promise<any> {
  const blog = await prisma.blogProject.findUnique({
    where: { id: blogId },
    include: { outlines: { orderBy: { createdAt: 'desc' }, take: 1 } },
  });

  if (!blog) throw new Error('Blog project not found.');
  const outline = blog.outlines[0];
  if (!outline) throw new Error('No outline found. Generate outline first.');

  await prisma.blogProject.update({
    where: { id: blogId },
    data: { status: 'GENERATING' },
  });

  try {
    const structure = outline.structure as Array<{ heading: string; headingLevel: number }>;
    const sectionsData = [];
    let combinedContent = '';

    for (let i = 0; i < structure.length; i++) {
      const item = structure[i];
      const sectionPrompt = `Write the full content for this section of a blog post:
      - Blog Title: "${blog.title}"
      - Current Section Heading: "${item.heading}" (Level H${item.headingLevel})
      - Context / Meta: "${outline.metaDescription}"
      - Brand Voice: "${blog.brandVoice}"
      - Target Audience: "${blog.targetAudience}"

      Write detailed, highly professional, informative paragraphs (approx. 200-300 words). Use markdown formatting where appropriate. Return ONLY the content for this section. No greetings, wrap text, or introduction.`;

      const content = await callGroq(sectionPrompt, 'You are an expert blogger. Write section content directly.');
      sectionsData.push({
        heading: item.heading,
        headingLevel: item.headingLevel,
        content: content,
        order: i,
      });
      combinedContent += `\n\n## ${item.heading}\n\n${content}`;
    }

    await prisma.$transaction([
      prisma.blogSection.deleteMany({ where: { blogId } }),
      ...sectionsData.map((sec) =>
        prisma.blogSection.create({
          data: {
            blogId,
            heading: sec.heading,
            headingLevel: sec.headingLevel,
            content: sec.content,
            order: sec.order,
            status: 'COMPLETED',
          },
        })
      ),
      prisma.blogProject.update({
        where: { id: blogId },
        data: {
          content: combinedContent.trim(),
          wordCount: combinedContent.split(/\s+/).length,
          status: 'APPROVED',
        },
      }),
    ]);

    return { content: combinedContent.trim() };
  } catch (error) {
    await prisma.blogProject.update({
      where: { id: blogId },
      data: { status: 'IN_REVIEW' },
    });
    throw error;
  }
}

