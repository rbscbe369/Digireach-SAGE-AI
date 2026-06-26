import * as React from 'react';
import type { QueueDashboardData } from '@/features/queue/types';
import { loadQueueAction } from '@/features/queue/actions';
import { QueueHealthWidget } from '@/features/queue/components/queue-health-widget';
import { JobTable } from '@/features/queue/components/job-table';

export default async function QueueDashboardPage() {
  // Load data via Server Action
  let data: QueueDashboardData = {
    jobs: [],
    workers: [],
    health: { latencyMs: 0, waitingJobs: 0, activeJobs: 0, errorRate: 0, successRate: 0, healthScore: 0 },
    providers: []
  };
  
  try {
    const response = await loadQueueAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Queue Dashboard</h2>
      </div>
      
      <QueueHealthWidget health={data?.health || null} />
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <JobTable jobs={data?.jobs || []} />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Background Workers</h3>
            {/* Worker components to be populated by Zustand/Server later */}
            <div className="text-sm text-gray-500 text-center py-4">
              Pending BullMQ Connection
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Token Optimization</h3>
            <div className="text-sm text-gray-500 text-center py-4">
              Pending Provider Router Connection
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
