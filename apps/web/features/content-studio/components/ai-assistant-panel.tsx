import * as React from 'react';

export function AIAssistantPanel() {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">AI Copilot</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Quick Actions</h4>
          <button className="w-full text-left px-3 py-2 border rounded-md text-sm hover:bg-gray-50 hover:text-indigo-600 transition-colors">
            Generate Introduction
          </button>
          <button className="w-full text-left px-3 py-2 border rounded-md text-sm hover:bg-gray-50 hover:text-indigo-600 transition-colors">
            Improve SEO & Readability
          </button>
          <button className="w-full text-left px-3 py-2 border rounded-md text-sm hover:bg-gray-50 hover:text-indigo-600 transition-colors">
            Insert Verified Citations
          </button>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Knowledge Graph Integration</h4>
          <div className="p-3 border rounded-lg bg-gray-50 text-xs text-gray-600">
            Suggesting 3 facts related to "Next.js 14" from your verified sources.
          </div>
        </div>
      </div>
    </aside>
  );
}
