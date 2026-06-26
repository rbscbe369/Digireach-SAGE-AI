import * as React from 'react';
import { loadOptimizationDashboardAction } from '@/features/optimization/actions';
import { SavingsWidget } from '@/features/optimization/components/savings-widget';
import { OptimizationDashboardPanel } from '@/features/optimization/components/optimization-dashboard';

export default async function OptimizationTokenUsagePage() {
  let data = {
    todaysCost: 0,
    todaysTokens: 0,
    tokensSaved: 0,
    moneySaved: 0,
    cacheHitRate: 0,
    averageRequestCost: 0,
    optimizationScore: 0
  };
  
  try {
    const response = await loadOptimizationDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <OptimizationDashboardPanel />
        <SavingsWidget />
      </div>
    </div>
  );
}
