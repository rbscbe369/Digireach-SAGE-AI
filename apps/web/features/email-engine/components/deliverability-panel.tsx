import * as React from 'react';

export function DeliverabilityPanel() {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Deliverability & Checks</h3>
        <span className="text-xs font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Scoring Pending</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Spam Analysis</h4>
          <div className="p-3 border rounded-lg bg-gray-50 text-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Spam Score</span>
              <span className="font-medium text-gray-900">-.- / 10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
              <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-xs text-gray-500">Run generation to calculate spam score based on keywords and links.</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Technical Checks</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100"></div>
              DKIM Validated
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100"></div>
              SPF Record Found
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100"></div>
              DMARC Configured
            </li>
          </ul>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">A/B Testing</h4>
          <button className="w-full text-center px-3 py-2 border border-teal-200 bg-teal-50 text-teal-700 rounded-md text-sm hover:bg-teal-100 transition-colors">
            Create Subject Line Variant
          </button>
        </div>
      </div>
    </aside>
  );
}
