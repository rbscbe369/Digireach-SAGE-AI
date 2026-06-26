import * as React from 'react';

export function EmailHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-teal-100 text-teal-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold">Email & Newsletter Engine</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Audience
        </button>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">
          New Campaign
        </button>
      </div>
    </header>
  );
}
