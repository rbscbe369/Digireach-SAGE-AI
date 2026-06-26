import * as React from 'react';

export function LandingPageWizard() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      <div className="border-b bg-gray-50/50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Landing Page Creation Wizard</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 10: Business Info & Goal</p>
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500">
                <option>SaaS</option>
                <option>Local Business</option>
                <option>E-commerce</option>
                <option>Agency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Goal</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500">
                <option>Lead Generation</option>
                <option>Sales</option>
                <option>Webinar Signups</option>
                <option>App Downloads</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
            <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500" placeholder="e.g. Small business owners in healthcare" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Offer (Value Proposition)</label>
            <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500" rows={3} placeholder="What are you offering?" />
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border p-4 rounded-lg bg-gray-50">
          <p>Visual Builder & Component Generation is <span className="font-medium text-fuchsia-600">Pending Implementation</span>.</p>
          <p className="mt-1">Awaiting Module 010 (Orchestrator) hooks to generate React Components dynamically.</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50 flex justify-end">
        <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-md font-medium hover:bg-fuchsia-700 transition-colors">
          Generate Landing Page
        </button>
      </div>
    </div>
  );
}
