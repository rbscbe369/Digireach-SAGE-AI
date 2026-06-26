import * as React from 'react';
import type { AnalyticsEngineDashboardData } from '@/features/analytics-engine/types';
import { loadAnalyticsOverviewAction } from '@/features/analytics-engine/actions';
import { GrowthInsightsPanel } from '@/features/analytics-engine/components/growth-insights-panel';
import { KpiGrid } from '@/features/analytics-engine/components/kpi-grid';

export default async function AnalyticsOverviewPage() {
  let data: AnalyticsEngineDashboardData = {
    overviewKpis: [],
    revenueForecast: null,
    topCampaignsRoi: [],
    activeAlerts: 0
  };
  
  try {
    const response = await loadAnalyticsOverviewAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <KpiGrid />
          
          <div className="p-6 pt-0">
             <div className="bg-white border rounded-xl shadow-sm p-6 flex items-center justify-center h-80 text-gray-400 border-dashed">
                <p>Chart Rendering Engine (e.g. Recharts/Chart.js) <span className="font-medium text-emerald-600">Pending Implementation</span>.</p>
             </div>
          </div>
        </div>
        <GrowthInsightsPanel />
      </div>
    </div>
  );
}
