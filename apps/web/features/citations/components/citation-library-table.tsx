import * as React from 'react';
import { CitationData } from '../types';

interface CitationLibraryTableProps {
  citations: CitationData[];
}

export function CitationLibraryTable({ citations }: CitationLibraryTableProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex-1">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 font-medium">Title / Formatted Citation</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium">Usage</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {citations.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-medium text-gray-900 mb-1">No Citations Yet</span>
                    <span className="text-sm">Generate citations from your Verified Sources.</span>
                  </div>
                </td>
              </tr>
            ) : (
              citations.map((citation) => (
                <tr key={citation.id} className="hover:bg-gray-50/50 cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 mb-1">{citation.title}</div>
                    <div className="text-xs text-gray-500 font-serif line-clamp-2">{citation.formattedText}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{citation.type}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-medium">
                      {citation.usageCount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                      {citation.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
