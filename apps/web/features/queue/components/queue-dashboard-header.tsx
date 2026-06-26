import * as React from 'react';

export function QueueDashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">AI Orchestration & Queue</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-medium">System Online</span>
        </div>
        <button className="bg-white border text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Pause Queue
        </button>
      </div>
    </header>
  );
}
