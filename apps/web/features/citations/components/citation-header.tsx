import * as React from 'react';

export function CitationHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Citation Library</h1>
      </div>
      <div className="flex items-center gap-3">
        <select className="border-gray-300 rounded-md text-sm px-3 py-2 bg-gray-50 border">
          <option>APA 7</option>
          <option>MLA 9</option>
          <option>Chicago</option>
          <option>Harvard</option>
          <option>IEEE</option>
        </select>
        <button className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Validate
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          New Citation
        </button>
      </div>
    </header>
  );
}
