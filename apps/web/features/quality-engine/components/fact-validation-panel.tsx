import * as React from 'react';

export function FactValidationPanel() {
  return (
    <aside className="w-80 border-r bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Fact Validation Engine</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="p-3 border rounded-lg border-green-200 bg-green-50">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm text-green-900">Verified Claim</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 rounded-full">98% Match</span>
          </div>
          <p className="text-xs text-green-800">"Digireach SAGE AI uses Next.js 14 for the frontend architecture."</p>
          <div className="mt-2 text-xs text-green-600 border-t border-green-200 pt-2 flex items-center justify-between">
            <span>Source: Foundation Schema</span>
            <span className="underline cursor-pointer">View Citation</span>
          </div>
        </div>

        <div className="p-3 border rounded-lg border-red-200 bg-red-50">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm text-red-900">High Risk Hallucination</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 rounded-full">No Source</span>
          </div>
          <p className="text-xs text-red-800">"Digireach SAGE AI has 1 million active users."</p>
          <div className="mt-2 text-xs text-red-600 border-t border-red-200 pt-2">
            No verifiable source found in Knowledge Graph or provided citations.
          </div>
        </div>
      </div>
    </aside>
  );
}
