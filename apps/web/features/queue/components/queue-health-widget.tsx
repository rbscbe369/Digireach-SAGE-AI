import * as React from 'react';
import { QueueHealth } from '../types';

interface QueueHealthWidgetProps {
  health: QueueHealth | null;
}

export function QueueHealthWidget({ health }: QueueHealthWidgetProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="p-4 bg-white border rounded-xl shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Queue Latency</h3>
        <p className="text-2xl font-bold mt-1">{health?.latencyMs || 0} <span className="text-sm font-normal text-gray-500">ms</span></p>
      </div>
      <div className="p-4 bg-white border rounded-xl shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Active Jobs</h3>
        <p className="text-2xl font-bold mt-1">{health?.activeJobs || 0}</p>
      </div>
      <div className="p-4 bg-white border rounded-xl shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Waiting Jobs</h3>
        <p className="text-2xl font-bold mt-1">{health?.waitingJobs || 0}</p>
      </div>
      <div className="p-4 bg-white border rounded-xl shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Health Score</h3>
        <p className="text-2xl font-bold mt-1 text-green-600">{health?.healthScore || 100}%</p>
      </div>
    </div>
  );
}
