import * as React from 'react';
import { CitationData } from '../types';

interface CitationDetailsPanelProps {
  citation: CitationData | null;
}

export function CitationDetailsPanel({ citation }: CitationDetailsPanelProps) {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Citation Details</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {!citation ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <span className="text-sm">Select a citation to view details</span>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold leading-tight mb-2">Formatted Reference</h2>
              <div className="p-3 bg-gray-50 rounded-md border font-serif text-sm">
                {citation.formattedText}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Style</span>
                <span className="text-sm font-medium">{citation.style}</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Status</span>
                <span className="text-sm font-medium text-green-600">{citation.status}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-xs font-medium text-gray-500 uppercase">Linked Source</span>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer truncate block">
                  View Verified Source &rarr;
                </span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Validation Report</h4>
              <div className="text-xs text-gray-500 italic bg-blue-50/50 p-3 rounded border border-blue-100 text-blue-800">
                Awaiting Background Worker Validation Check...
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
