import * as React from 'react';

export function PromptLibraryPanel() {
  const categories = [
    { name: 'System Prompts', count: 12 },
    { name: 'Agent Prompts', count: 24 },
    { name: 'Workflow Prompts', count: 8 },
    { name: 'SEO Prompts', count: 15 },
  ];

  return (
    <aside className="w-64 border-r bg-white flex flex-col hidden md:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Categories</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm">
            <span className="text-gray-700 font-medium">{cat.name}</span>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{cat.count}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
