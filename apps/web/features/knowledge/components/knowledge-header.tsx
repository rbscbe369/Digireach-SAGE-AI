import * as React from 'react';

export function KnowledgeHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">AI Knowledge Graph</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex bg-gray-100 rounded-md p-1 mr-4">
          <button className="px-3 py-1 text-sm font-medium bg-white rounded shadow-sm">Graph View</button>
          <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">List View</button>
        </div>
        <button className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Build Graph
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Semantic Search
        </button>
      </div>
    </header>
  );
}
