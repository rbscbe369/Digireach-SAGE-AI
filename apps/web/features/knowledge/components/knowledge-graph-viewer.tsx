import * as React from 'react';

export function KnowledgeGraphViewer() {
  return (
    <div className="relative flex-1 bg-gray-50 border rounded-xl overflow-hidden m-6 shadow-inner flex items-center justify-center">
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur border shadow-sm rounded-lg p-2 flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Zoom In">+</button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Zoom Out">-</button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Fit to Screen">Fit</button>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 animate-pulse">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Knowledge Graph Render Engine</h3>
        <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
          Waiting for Background Embedding Generators to process nodes and establish semantic edges.
        </p>
      </div>

      {/* Mini Map Placeholder */}
      <div className="absolute bottom-4 right-4 w-48 h-32 bg-white/90 backdrop-blur border shadow-sm rounded-lg p-2">
        <div className="w-full h-full border-2 border-blue-200 border-dashed rounded bg-blue-50/50" />
      </div>
    </div>
  );
}
