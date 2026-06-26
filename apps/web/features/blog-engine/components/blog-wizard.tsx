'use client';

import React, { useState } from 'react';
import { createBlogAction, generateOutlineAction, generateBlogAction } from '../actions';

export function BlogWizard() {
  const [step, setStep] = useState<'form' | 'generating_outline' | 'outline_ready' | 'generating_content' | 'completed'>('form');
  const [keyword, setKeyword] = useState('Enterprise AI Cost Optimization');
  const [goal, setGoal] = useState('EDUCATIONAL');
  const [length, setLength] = useState('1500');
  const [brandVoice, setBrandVoice] = useState('Authoritative & Professional');
  const [targetAudience, setTargetAudience] = useState('CTOs and Finance Directors');
  
  const [blogId, setBlogId] = useState<string | null>(null);
  const [outline, setOutline] = useState<any>(null);
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCreateAndOutline = async () => {
    setStep('generating_outline');
    setError(null);
    try {
      const blog = await createBlogAction({
        title: keyword,
        goal: goal,
        targetAudience: targetAudience,
        brandVoice: brandVoice,
        targetLength: length + ' Words',
      });
      setBlogId(blog.id);

      const outlineData = await generateOutlineAction(blog.id);
      setOutline(outlineData);
      setStep('outline_ready');
    } catch (err: any) {
      setError(err?.message || 'Failed to generate outline. Please try again.');
      setStep('form');
    }
  };

  const handleGenerateContent = async () => {
    if (!blogId) return;
    setStep('generating_content');
    setError(null);
    try {
      const result = await generateBlogAction(blogId);
      setContent(result.content);
      setStep('completed');
    } catch (err: any) {
      setError(err?.message || 'Failed to generate blog content. Please try again.');
      setStep('outline_ready');
    }
  };

  const handleReset = () => {
    setStep('form');
    setOutline(null);
    setContent('');
    setBlogId(null);
    setError(null);
  };

  return (
    <div className="relative flex-1 bg-white border border-gray-200 rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="border-b bg-gray-50/50 p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Enterprise Blog Engine</h2>
          <p className="text-sm text-gray-500 mt-1">
            {step === 'form' && 'Step 1 of 3: Define Parameters'}
            {step === 'generating_outline' && 'Step 2 of 3: Architecting Outline...'}
            {step === 'outline_ready' && 'Step 2 of 3: Outline Review'}
            {step === 'generating_content' && 'Step 3 of 3: Writing Content...'}
            {step === 'completed' && 'Completed: Publication Ready'}
          </p>
        </div>
        {(step === 'outline_ready' || step === 'completed') && (
          <button
            onClick={handleReset}
            className="text-xs text-gray-500 hover:text-red-600 transition-colors border px-2.5 py-1 rounded hover:bg-gray-50"
          >
            Start Over
          </button>
        )}
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* STEP 1: Parameter Form */}
        {step === 'form' && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Keyword / Title</label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-teal-500 focus:ring-teal-500 text-sm"
                placeholder="e.g. Enterprise AI Optimization"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Blog Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm p-2.5 border focus:border-teal-500 focus:ring-teal-500 text-sm"
                >
                  <option value="EDUCATIONAL">Educational Guide</option>
                  <option value="COMMERCIAL">Commercial Intent</option>
                  <option value="LISTICLE">Listicle</option>
                  <option value="CASE_STUDY">Case Study</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Target Length</label>
                <select
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm p-2.5 border focus:border-teal-500 focus:ring-teal-500 text-sm"
                >
                  <option value="1000">1000 Words</option>
                  <option value="1500">1500 Words</option>
                  <option value="2500">2500 Words</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Voice</label>
                <input
                  type="text"
                  value={brandVoice}
                  onChange={(e) => setBrandVoice(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-teal-500 focus:ring-teal-500 text-sm"
                  placeholder="e.g. Friendly & Technical"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Target Audience</label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-teal-500 focus:ring-teal-500 text-sm"
                  placeholder="e.g. Developers"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Generating Outline Loading State */}
        {step === 'generating_outline' && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <svg className="animate-spin h-10 w-10 text-teal-600 mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <h3 className="text-lg font-bold text-gray-900">Structuring SEO Outline</h3>
            <p className="text-sm text-gray-500 mt-2 max-w-sm">
              Querying Groq Llama-3 model to design keyword-optimized headings, meta tags, and alt titles...
            </p>
          </div>
        )}

        {/* STEP 3: Outline Review */}
        {step === 'outline_ready' && outline && (
          <div className="space-y-6">
            <div className="bg-gray-50 border rounded-lg p-5">
              <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider block mb-1">Generated SEO H1</span>
              <h3 className="text-xl font-bold text-gray-900">{outline.h1}</h3>
              <p className="text-sm text-gray-600 mt-2"><strong>Meta Description:</strong> {outline.metaDescription}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Suggested Article Structure</h4>
              <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                {(outline.structure as Array<{ heading: string; headingLevel: number }>).map((item, idx) => (
                  <div key={idx} className="p-3.5 flex items-center space-x-3 text-sm">
                    <span className="bg-gray-100 border text-gray-500 text-xs px-2 py-0.5 rounded font-semibold font-mono">
                      H{item.headingLevel}
                    </span>
                    <span className="text-gray-800 font-medium">{item.heading}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Generating Content Loading State */}
        {step === 'generating_content' && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <svg className="animate-spin h-10 w-10 text-teal-600 mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <h3 className="text-lg font-bold text-gray-900">Writing Full Content Copy</h3>
            <p className="text-sm text-gray-500 mt-2 max-w-sm">
              Groq is generating rich, informative paragraphs for each heading structure in your outline. This takes a few seconds...
            </p>
          </div>
        )}

        {/* STEP 5: Completed Content Preview */}
        {step === 'completed' && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 text-sm font-semibold flex items-center space-x-2">
              <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Blog post successfully compiled and saved to database!</span>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Content Editor Preview (Markdown)</label>
              <textarea
                readOnly
                value={content}
                rows={12}
                className="w-full border-gray-300 rounded-lg p-4 border bg-gray-900 text-slate-100 font-mono text-sm focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Command Buttons */}
      <div className="border-t p-4 bg-gray-50 flex justify-end space-x-3">
        {step === 'form' && (
          <button
            onClick={handleCreateAndOutline}
            className="bg-teal-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-teal-700 transition-colors text-sm shadow"
          >
            Generate Outline
          </button>
        )}

        {step === 'outline_ready' && (
          <>
            <button
              onClick={handleReset}
              className="bg-white border text-gray-700 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              Re-edit
            </button>
            <button
              onClick={handleGenerateContent}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-teal-700 transition-colors text-sm shadow"
            >
              Generate Full Article
            </button>
          </>
        )}

        {step === 'completed' && (
          <button
            onClick={handleReset}
            className="bg-teal-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-teal-700 transition-colors text-sm shadow"
          >
            Create Another Post
          </button>
        )}
      </div>
    </div>
  );
}
