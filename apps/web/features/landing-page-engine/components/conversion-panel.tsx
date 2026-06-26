import * as React from 'react';

export function ConversionPanel() {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Conversion & CRO</h3>
        <span className="text-xs font-bold text-fuchsia-600 bg-fuchsia-100 px-2 py-0.5 rounded-full">Analysis Pending</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Copywriting Frameworks</h4>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 border rounded-md text-sm hover:bg-gray-50 transition-colors flex justify-between items-center">
              AIDA
              <span className="text-xs text-gray-400">Apply</span>
            </button>
            <button className="w-full text-left px-3 py-2 border rounded-md text-sm hover:bg-gray-50 transition-colors flex justify-between items-center">
              PAS (Problem-Agitate-Solve)
              <span className="text-xs text-gray-400">Apply</span>
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Trust Signals</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300"></div>
              Testimonials Section
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300"></div>
              Risk Reversal (Guarantee)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300"></div>
              Authority Badges
            </li>
          </ul>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Image Prompts</h4>
          <button className="w-full text-center px-3 py-2 border border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 rounded-md text-sm hover:bg-fuchsia-100 transition-colors">
            Generate Visual Assets
          </button>
        </div>
      </div>
    </aside>
  );
}
