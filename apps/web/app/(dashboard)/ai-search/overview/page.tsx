import * as React from 'react';
import { VisibilityScorePanel } from '@/features/ai-search/components/visibility-score';
import { AEOPanel } from '@/features/ai-search/components/aeo-panel';
import { GEOPanel } from '@/features/ai-search/components/geo-panel';

export default async function AiSearchOverviewPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Search Dashboard</h2>
        <p className="text-gray-500">Track and optimize your visibility across ChatGPT, Perplexity, and Google AI Overviews.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <VisibilityScorePanel />
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-indigo-900 mb-2">Knowledge Graph Link</h3>
            <p className="text-sm text-indigo-700 mb-4">Module 009 is currently detecting 142 distinct brand entities. 12 have low confidence scores.</p>
            <button className="w-full bg-white border border-indigo-300 text-indigo-700 py-2 rounded font-medium text-sm hover:bg-indigo-100 transition-colors">
              Optimize Entities
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <AEOPanel />
          <GEOPanel />
        </div>
      </div>
    </div>
  );
}
