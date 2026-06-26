import * as React from 'react';

export function PlatformSelector() {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Target Platforms</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Select Networks</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="rounded text-sky-600 focus:ring-sky-500" defaultChecked />
              <span className="text-sm font-medium">LinkedIn</span>
            </label>
            <label className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="rounded text-sky-600 focus:ring-sky-500" defaultChecked />
              <span className="text-sm font-medium">X (Twitter)</span>
            </label>
            <label className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="rounded text-sky-600 focus:ring-sky-500" />
              <span className="text-sm font-medium">Instagram</span>
            </label>
            <label className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="rounded text-sky-600 focus:ring-sky-500" />
              <span className="text-sm font-medium">Facebook</span>
            </label>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Hashtags</h4>
          <div className="p-3 border rounded-lg bg-gray-50 text-xs text-gray-600 flex flex-wrap gap-2">
            <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded">#B2BMarketing</span>
            <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded">#AIOptimization</span>
            <span className="text-gray-400 p-1">+ Generate More</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
