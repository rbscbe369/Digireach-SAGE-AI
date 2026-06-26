import * as React from 'react';

export function VisibilityScorePanel() {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Overall AI Search Visibility</h2>
      
      <div className="relative w-48 h-48 flex items-center justify-center mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="#4f46e5" strokeWidth="8" strokeDasharray="283" strokeDashoffset="56" className="transition-all duration-1000" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-gray-900">82</span>
          <span className="text-xs font-medium text-indigo-600 mt-1">Excellent</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 w-full gap-4 pt-6 border-t">
        <div>
          <span className="block text-xs text-gray-500 mb-1">AEO Score</span>
          <span className="font-semibold text-gray-900">78/100</span>
        </div>
        <div>
          <span className="block text-xs text-gray-500 mb-1">GEO Score</span>
          <span className="font-semibold text-gray-900">85/100</span>
        </div>
        <div>
          <span className="block text-xs text-gray-500 mb-1">Citations</span>
          <span className="font-semibold text-gray-900">92/100</span>
        </div>
      </div>
    </div>
  );
}
