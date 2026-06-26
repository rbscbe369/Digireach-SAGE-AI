import * as React from 'react';
import type { BlogEngineDashboardData } from '@/features/blog-engine/types';
import { loadBlogDashboardAction } from '@/features/blog-engine/actions';
import { SEOPanel } from '@/features/blog-engine/components/seo-panel';
import { BlogWizard } from '@/features/blog-engine/components/blog-wizard';

export default async function NewBlogPage() {
  let data: BlogEngineDashboardData = {
    totalBlogs: 0,
    draftsCount: 0,
    inReviewCount: 0,
    publishedCount: 0,
    recentBlogs: []
  };
  
  try {
    const response = await loadBlogDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <BlogWizard />
        <SEOPanel />
      </div>
    </div>
  );
}
