import * as React from 'react';

export function QualityScoreCard() {
  return (
    <div className="relative flex-1 bg-gray-50/50 border rounded-xl overflow-hidden m-6 shadow-inner flex flex-col">
      <div className="border-b bg-white p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Live Review: Blog Post Generation</h2>
          <p className="text-xs text-gray-500 mt-1">Status: <span className="text-orange-500 font-medium">NEEDS IMPROVEMENT</span></p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border rounded text-sm hover:bg-gray-50 text-red-600 font-medium">Reject</button>
          <button className="px-3 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700 font-medium">Approve Output</button>
        </div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="w-48 h-48 rounded-full border-8 border-orange-400 flex flex-col items-center justify-center bg-white shadow-sm mb-8 relative">
          <span className="text-5xl font-bold text-gray-800">72</span>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Score</span>
          
          <div className="absolute -top-3 -right-3 bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-sm" title="2 Critical Issues">
            2
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          <div className="bg-white border rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 uppercase mb-1">Fact Accuracy</div>
            <div className="text-lg font-bold text-red-500">65%</div>
          </div>
          <div className="bg-white border rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 uppercase mb-1">Citation Coverage</div>
            <div className="text-lg font-bold text-orange-500">70%</div>
          </div>
          <div className="bg-white border rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 uppercase mb-1">Grammar</div>
            <div className="text-lg font-bold text-green-500">95%</div>
          </div>
          <div className="bg-white border rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 uppercase mb-1">Safety</div>
            <div className="text-lg font-bold text-green-500">100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
