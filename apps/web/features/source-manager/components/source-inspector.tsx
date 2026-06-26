import * as React from 'react';
import { SourceData } from '../types';

interface SourceInspectorProps {
  source: SourceData | null;
}

export function SourceInspector({ source }: SourceInspectorProps) {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Source Details</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {!source ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <span className="text-sm">Select a source to view details</span>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold leading-tight mb-2">{source.title}</h2>
              <a href={source.url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline break-all">
                {source.url}
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Domain</span>
                <span className="text-sm font-medium">{source.domain}</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Trust Score</span>
                <span className={`text-sm font-bold ${source.trustScore > 80 ? 'text-green-600' : 'text-orange-500'}`}>
                  {source.trustScore}/100
                </span>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Publisher</span>
                <span className="text-sm">{source.publisher || 'Unknown'}</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Status</span>
                <span className="text-sm">{source.status}</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Verification Timeline</h4>
              <div className="text-xs text-gray-500 italic">
                Pending Background Workers...
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
