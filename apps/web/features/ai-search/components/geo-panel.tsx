import * as React from 'react';

export function GEOPanel() {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h2 className="text-lg font-bold">Generative Engine Optimization (GEO)</h2>
          <p className="text-sm text-gray-500">Optimizing for LLM Retrieval, Chunking & Citations</p>
        </div>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">Score: 85/100</span>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 border rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">LLM Retrieval Probability</span>
            <span className="text-sm font-bold text-emerald-600">High (92%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Evidence & Citation Density</span>
            <span className="text-sm font-bold text-yellow-600">Medium (65%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Recommendation: Add more primary academic sources to improve trust score.</p>
        </div>

        <div className="p-4 bg-gray-50 border rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Chunk Readability (for Vector Search)</span>
            <span className="text-sm font-bold text-emerald-600">Excellent (95%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
