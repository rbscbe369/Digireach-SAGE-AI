import * as React from 'react';

export function OptimizationDashboardPanel() {
  return (
    <div className="relative flex-1 bg-gray-50/50 border rounded-xl overflow-hidden m-6 shadow-inner flex flex-col">
      <div className="border-b bg-white p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Live Optimization Graph</h2>
          <p className="text-xs text-gray-500 mt-1">Status: <span className="text-blue-600 font-medium">MONITORING</span></p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border rounded text-sm hover:bg-gray-50 font-medium">Clear Caches</button>
        </div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="text-center w-full max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Optimization Engine Active</h3>
          <p className="mt-1 text-sm text-gray-500 mb-8">
            Monitoring all requests passing through the Multi-LLM Router.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="bg-white border rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Today's Cost</div>
              <div className="text-lg font-bold text-red-500">$12.45</div>
            </div>
            <div className="bg-white border rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Today's Tokens</div>
              <div className="text-lg font-bold text-blue-500">1.2M</div>
            </div>
            <div className="bg-white border rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Saved Tokens</div>
              <div className="text-lg font-bold text-green-500">450K</div>
            </div>
            <div className="bg-white border rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Cache Hit Rate</div>
              <div className="text-lg font-bold text-green-500">32%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
