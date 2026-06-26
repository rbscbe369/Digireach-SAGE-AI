import * as React from 'react';

export function ResearchHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Research Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium border px-3 py-1 rounded-full bg-gray-50 text-gray-700">
          Credits: Pending Auth
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
          New Research
        </button>
      </div>
    </header>
  );
}
