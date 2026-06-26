import * as React from 'react';

export function SocialWizard() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      <div className="border-b bg-gray-50/50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Social Content Wizard</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 8: Campaign & Content Type</p>
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Goal</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-sky-500 focus:ring-sky-500">
              <option>Brand Awareness</option>
              <option>Lead Generation</option>
              <option>Community Growth</option>
              <option>Education</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-sky-500 focus:ring-sky-500">
              <option>Single Image Post</option>
              <option>Educational Carousel</option>
              <option>Twitter Thread</option>
              <option>Short Video Script</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
            <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-sky-500 focus:ring-sky-500" placeholder="e.g. B2B Founders" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Topic</label>
            <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-sky-500 focus:ring-sky-500" rows={3} placeholder="What should this post be about?" />
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border p-4 rounded-lg bg-gray-50">
          <p>Carousel Builder & Generation is <span className="font-medium text-sky-600">Pending Implementation</span>.</p>
          <p className="mt-1">Awaiting Module 010 (Orchestrator) to integrate with Canvas/Carousel engine.</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50 flex justify-end">
        <button className="bg-sky-600 text-white px-6 py-2 rounded-md font-medium hover:bg-sky-700 transition-colors">
          Generate Content
        </button>
      </div>
    </div>
  );
}
