import * as React from 'react';

export function SourceManagerHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Source Manager</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Import Sources
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Add Source
        </button>
      </div>
    </header>
  );
}
