import * as React from 'react';

export function AEOPanel() {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h2 className="text-lg font-bold">Answer Engine Optimization (AEO)</h2>
          <p className="text-sm text-gray-500">Optimizing for ChatGPT, Perplexity & Google AI Overviews</p>
        </div>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">Score: 78/100</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
          <div>
            <h4 className="font-semibold text-red-900 text-sm">Missing Direct Answers</h4>
            <p className="text-xs text-red-700 mt-1">"What is Digireach SAGE AI?" lacks a concise 40-word summary.</p>
          </div>
          <button className="bg-white border border-red-200 text-red-700 px-3 py-1 text-xs rounded font-medium hover:bg-red-100">Fix with AI</button>
        </div>

        <div className="flex items-center justify-between p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
          <div>
            <h4 className="font-semibold text-yellow-900 text-sm">FAQ Schema Incomplete</h4>
            <p className="text-xs text-yellow-700 mt-1">3 top competitor questions are missing from your Pricing Page.</p>
          </div>
          <button className="bg-white border border-yellow-200 text-yellow-700 px-3 py-1 text-xs rounded font-medium hover:bg-yellow-100">Expand FAQ</button>
        </div>

        <div className="flex items-center justify-between p-3 border border-emerald-200 bg-emerald-50 rounded-lg">
          <div>
            <h4 className="font-semibold text-emerald-900 text-sm">List Answer Optimized</h4>
            <p className="text-xs text-emerald-700 mt-1">"Top 10 AI Tools" is perfectly formatted for AI extraction.</p>
          </div>
          <span className="text-emerald-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
