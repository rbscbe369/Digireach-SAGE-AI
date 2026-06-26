import * as React from 'react';

export function EmailWizard() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      <div className="border-b bg-gray-50/50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Email Campaign Wizard</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 7: Campaign Type & Goal</p>
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-teal-500 focus:ring-teal-500">
              <option>Newsletter</option>
              <option>Sales Outreach</option>
              <option>Product Launch</option>
              <option>Event Invitation</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience Segment</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-teal-500 focus:ring-teal-500">
              <option>All Subscribers</option>
              <option>Highly Engaged (Last 30 Days)</option>
              <option>Past Customers</option>
              <option>Churn Risk</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Message</label>
            <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-teal-500 focus:ring-teal-500" rows={3} placeholder="What is the core message of this email?" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Personalization Tags</label>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 border text-xs rounded text-gray-600 cursor-pointer hover:bg-gray-200">{"{{first_name}}"}</span>
              <span className="px-2 py-1 bg-gray-100 border text-xs rounded text-gray-600 cursor-pointer hover:bg-gray-200">{"{{company}}"}</span>
              <span className="px-2 py-1 bg-gray-100 border text-xs rounded text-gray-600 cursor-pointer hover:bg-gray-200">{"{{recent_purchase}}"}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border p-4 rounded-lg bg-gray-50">
          <p>Visual Email Builder is <span className="font-medium text-teal-600">Pending Implementation</span>.</p>
          <p className="mt-1">Awaiting Module 010 (Orchestrator) to generate modular email blocks (MJML/HTML).</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50 flex justify-end">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors">
          Generate Email
        </button>
      </div>
    </div>
  );
}
