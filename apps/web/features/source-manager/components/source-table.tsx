import * as React from 'react';
import { SourceData } from '../types';

interface SourceTableProps {
  sources: SourceData[];
}

export function SourceTable({ sources }: SourceTableProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex-1">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 font-medium">Domain</th>
              <th className="px-6 py-3 font-medium">Title</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Trust Score</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sources.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-medium text-gray-900 mb-1">No Sources Found</span>
                    <span className="text-sm">You haven't added any sources yet.</span>
                  </div>
                </td>
              </tr>
            ) : (
              sources.map((source) => (
                <tr key={source.id} className="hover:bg-gray-50/50 cursor-pointer">
                  <td className="px-6 py-4 font-medium text-gray-900">{source.domain}</td>
                  <td className="px-6 py-4 truncate max-w-xs">{source.title}</td>
                  <td className="px-6 py-4 text-gray-600">{source.category}</td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${source.trustScore > 80 ? 'text-green-600' : 'text-orange-500'}`}>
                      {source.trustScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {source.status}
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
