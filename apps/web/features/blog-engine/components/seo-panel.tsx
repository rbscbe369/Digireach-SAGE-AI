import * as React from 'react';

export function SEOPanel() {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">SEO Optimization</h3>
        <span className="text-xs font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Score: --</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Keyword Density</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-700">Primary Keyword</span>
              <span className="text-gray-400">0%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gray-300 h-1.5 rounded-full w-0"></div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Checklist</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300"></div>
              Meta Title included
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300"></div>
              H1 contains keyword
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300"></div>
              Internal link added
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
