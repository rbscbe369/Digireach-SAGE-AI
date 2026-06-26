import * as React from 'react';
import type { DashboardData } from '@/features/dashboard/types';
import { getDashboardDataAction } from '@/features/dashboard/actions';
import { KPICards } from '@/features/dashboard/components/kpi-cards';
import { ActivityFeed } from '@/features/dashboard/components/activity-feed';
import { AICreditsPanel } from '@/features/dashboard/components/ai-credits';

export default async function DashboardPage() {
  // We use a dummy ID for now. Module 002 Auth will inject the actual organization ID.
  let data: DashboardData = {
    metrics: [],
    recentActivity: [],
    credits: { total: 0, used: 0, remaining: 0, resetDate: new Date().toISOString() }
  };
  
  try {
    data = await getDashboardDataAction('pending-org-id');
  } catch (err) {
    // Gracefully catch the "Pending Implementation" error so the UI still renders
    // with empty structured data.
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Digireach SAGE AI. Here is your overview.
        </p>
      </div>

      <KPICards metrics={data.metrics} />

      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4">
        <ActivityFeed items={data.recentActivity} />
        <AICreditsPanel credits={data.credits} />
      </div>
    </div>
  );
}
