import * as React from 'react';
import Link from 'next/link';

export function PublishingHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-fuchsia-100 text-fuchsia-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold">Publishing & Distribution Engine</h1>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/publishing/queue" className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          View Queue
        </Link>
        <Link href="/publishing/new" className="bg-fuchsia-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-fuchsia-700 transition-colors">
          New Schedule
        </Link>
      </div>
    </header>
  );
}
