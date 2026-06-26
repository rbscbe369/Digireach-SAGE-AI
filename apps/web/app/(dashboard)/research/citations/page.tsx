import * as React from 'react';
import type { CitationDashboardData } from '@/features/citations/types';
import { loadCitationsAction } from '@/features/citations/actions';
import { CitationFilters } from '@/features/citations/components/citation-filters';
import { CitationLibraryTable } from '@/features/citations/components/citation-library-table';
import { CitationDetailsPanel } from '@/features/citations/components/citation-details-panel';

export default async function CitationPage() {
  let data: CitationDashboardData = {
    citations: [],
    totalCount: 0,
    validatedCount: 0,
    pendingCount: 0,
    brokenCount: 0
  };
  
  try {
    const response = await loadCitationsAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex h-full overflow-hidden">
      <CitationFilters />
      
      <div className="flex-1 overflow-hidden flex flex-col p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold tracking-tight">Citation Library</h2>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Search citations by author, title or publisher..." 
              className="w-96 px-4 py-2 text-sm border rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold">{data.totalCount}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Citations</div>
          </div>
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">{data.validatedCount}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Validated</div>
          </div>
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-500">{data.pendingCount}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending</div>
          </div>
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold text-red-600">{data.brokenCount}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Broken Links</div>
          </div>
        </div>
        
        <CitationLibraryTable citations={data.citations} />
      </div>

      <CitationDetailsPanel citation={null} />
    </div>
  );
}
