import * as React from 'react';

export function PublishingWizard() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      <div className="border-b bg-gray-50/50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Publishing Scheduler Wizard</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 8: Source Content Selection</p>
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content Source</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500">
              <option>Select Content to Publish...</option>
              <option>Blog: Top 10 AI Tools (Module 016)</option>
              <option>Social: LinkedIn Carousel (Module 018)</option>
              <option>Email: Weekly Newsletter (Module 019)</option>
              <option>Video: Product Demo Shorts (Module 020)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Destinations</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="text-fuchsia-600 rounded" />
                <span className="text-sm font-medium">WordPress Blog</span>
              </label>
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="text-fuchsia-600 rounded" />
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </label>
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="text-fuchsia-600 rounded" />
                <span className="text-sm font-medium">YouTube Channel</span>
              </label>
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="text-fuchsia-600 rounded" />
                <span className="text-sm font-medium">Twitter / X</span>
              </label>
              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="text-fuchsia-600 rounded" />
                <span className="text-sm font-medium">Resend Newsletter</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Date</label>
              <input type="date" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Time (Local)</label>
              <input type="time" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-fuchsia-500 focus:ring-fuchsia-500" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border p-4 rounded-lg bg-gray-50">
          <p>Distribution Engine is <span className="font-medium text-fuchsia-600">Pending BullMQ Hookup</span>.</p>
          <p className="mt-1">Jobs will be queued once background workers are activated.</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50 flex justify-end gap-3">
        <button className="bg-white border text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors">
          Publish Now
        </button>
        <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-md font-medium hover:bg-fuchsia-700 transition-colors">
          Schedule & Queue
        </button>
      </div>
    </div>
  );
}
