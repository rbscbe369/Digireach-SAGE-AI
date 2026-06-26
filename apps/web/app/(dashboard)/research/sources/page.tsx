import * as React from 'react';
import type { SourceManagerDashboardData } from '@/features/source-manager/types';
import { loadSourcesAction } from '@/features/source-manager/actions';
import { SourceFilters } from '@/features/source-manager/components/source-filters';
import { SourceTable } from '@/features/source-manager/components/source-table';
import { SourceInspector } from '@/features/source-manager/components/source-inspector';

export default async function SourceManagerPage() {
  let data: SourceManagerDashboardData = {
    sources: [],
    verifiedCount: 0,
    pendingCount: 0,
    rejectedCount: 0,
    averageTrustScore: 0
  };
  
  try {
    const response = await loadSourcesAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders
  }

  return (
    <div className="flex h-full overflow-hidden">
      <SourceFilters />
      
      <div className="flex-1 overflow-hidden flex flex-col p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold tracking-tight">All Sources</h2>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Search sources by domain, title or category..." 
              className="w-80 px-4 py-2 text-sm border rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold">{data.verifiedCount}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Verified</div>
          </div>
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold">{data.pendingCount}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending</div>
          </div>
          <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
            <div className="text-2xl font-bold">{data.averageTrustScore}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Trust Score</div>
          </div>
        </div>
        
        <SourceTable sources={data.sources} />
      </div>

      <SourceInspector source={null} />
    </div>
  );
}
