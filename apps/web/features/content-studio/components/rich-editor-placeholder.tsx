import * as React from 'react';

export function RichEditorPlaceholder() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden">
      <div className="border-b bg-gray-50/50 p-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold font-serif text-gray-900 focus:outline-none" contentEditable suppressContentEditableWarning>Untitled Document</h2>
          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
            <span>Word Count: 0</span>
            <span>•</span>
            <span>SEO Score: <span className="text-orange-500">N/A</span></span>
            <span>•</span>
            <span>Saved 2 mins ago</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-12 overflow-y-auto cursor-text">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6 text-gray-400">
            <span className="text-sm font-medium border border-gray-200 rounded px-2 py-0.5 shadow-sm">/</span>
            <span className="text-sm">Type '/' for commands, or start writing...</span>
          </div>
          
          <div className="text-center mt-32">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-400 mb-4 animate-pulse">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Enterprise Rich Editor</h3>
            <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
              Awaiting BlockNote or TipTap integration for full rich-text capabilities, collaborative editing, and inline AI commands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
