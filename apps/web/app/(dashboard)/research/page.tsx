import * as React from 'react';
import type { ResearchDashboardData } from '@/features/research/types';
import { loadResearchDashboardAction } from '@/features/research/actions';
import { ResearchFilters } from '@/features/research/components/research-filters';
import { ResearchInsightsPanel } from '@/features/research/components/research-insights-panel';
import { ResearchProjectGrid } from '@/features/research/components/research-project-grid';

export default async function ResearchDashboardPage() {
  // Load data via Server Action
  let data: ResearchDashboardData = {
    projects: [],
    insights: [],
    templates: [],
    totalCredits: 0,
    usedCredits: 0
  };
  
  try {
    const response = await loadResearchDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Catch pending implementation so UI renders empty structures.
  }

  return (
    <div className="flex h-full overflow-hidden">
      <ResearchFilters />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Active Research</h2>
          </div>
          
          {/* Quick Actions Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Quick Research', 'Competitor Analysis', 'Keyword Research', 'Trend Analysis'].map(action => (
              <button key={action} className="p-4 border rounded-xl text-sm font-medium hover:bg-gray-50 text-left transition-colors">
                {action}
              </button>
            ))}
          </div>

          <ResearchProjectGrid projects={data.projects} />
        </div>
      </div>

      <ResearchInsightsPanel insights={data.insights} />
    </div>
  );
}
