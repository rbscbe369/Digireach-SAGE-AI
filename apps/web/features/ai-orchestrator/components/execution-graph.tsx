import * as React from 'react';

export function ExecutionGraph() {
  return (
    <div className="relative flex-1 bg-gray-50/50 border rounded-xl overflow-hidden m-6 shadow-inner flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4 animate-pulse">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">DAG Execution Engine</h3>
        <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
          Awaiting Task Planner logic. When a workflow is dispatched, you will see the Agent execution graph here.
        </p>
      </div>
    </div>
  );
}
