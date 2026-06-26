import * as React from 'react';

export function GrowthInsightsPanel() {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Growth Intelligence</h3>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">AI Insights</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">AI Recommendations</h4>
          <div className="space-y-3 text-sm">
            <div className="p-3 border rounded-lg border-emerald-200 bg-emerald-50">
              <span className="font-semibold text-emerald-900 block mb-1">Repurpose Top Blog</span>
              <p className="text-emerald-800 text-xs mb-2">"10 AI Tools" is trending. Generate a YouTube script and LinkedIn Carousel to capture cross-platform reach.</p>
              <button className="text-xs bg-white text-emerald-700 px-2 py-1 rounded border border-emerald-200 font-medium">1-Click Repurpose</button>
            </div>
            <div className="p-3 border rounded-lg bg-gray-50">
              <span className="font-semibold text-gray-900 block mb-1">Publishing Time Optimization</span>
              <p className="text-gray-600 text-xs">Switch your primary LinkedIn publishing time from 9 AM to 11 AM EST to capture 15% more predicted engagement.</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">ROI Forecast (Next 30 Days)</h4>
          <div className="p-3 border rounded-lg bg-gray-50 text-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">Predicted Revenue</span>
              <span className="font-semibold text-gray-900">~$4,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Confidence Score</span>
              <span className="font-semibold text-emerald-600">82%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
