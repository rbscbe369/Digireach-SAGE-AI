import * as React from 'react';

export function SavingsWidget() {
  return (
    <aside className="w-80 border-r bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Optimization Alerts</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="p-3 border rounded-lg border-blue-200 bg-blue-50">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm text-blue-900">Semantic Cache Hit</h4>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 rounded-full">Saved $0.05</span>
          </div>
          <p className="text-xs text-blue-800">"Topic: Next.js 14 vs React 19 routing differences."</p>
          <div className="mt-2 text-xs text-blue-600 border-t border-blue-200 pt-2 flex items-center justify-between">
            <span>Reused Completion Cache</span>
          </div>
        </div>

        <div className="p-3 border rounded-lg border-orange-200 bg-orange-50">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm text-orange-900">High Token Usage</h4>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 rounded-full">Cost $0.12</span>
          </div>
          <p className="text-xs text-orange-800">"Article Generation Workflow"</p>
          <div className="mt-2 text-xs text-orange-600 border-t border-orange-200 pt-2">
            Consider reducing context size or switching to Claude 3 Haiku for this task.
          </div>
        </div>
      </div>
    </aside>
  );
}
