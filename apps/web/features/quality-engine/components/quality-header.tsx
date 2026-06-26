import * as React from 'react';

export function QualityHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-red-100 text-red-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold">Quality Assurance Engine</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Export Report
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
          Run Validation
        </button>
      </div>
    </header>
  );
}
