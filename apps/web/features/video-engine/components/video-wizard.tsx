import * as React from 'react';

export function VideoWizard() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      <div className="border-b bg-gray-50/50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Video & Podcast Wizard</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 8: Platform & Format Selection</p>
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Platform</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-red-500 focus:ring-red-500">
                <option>YouTube Long Form</option>
                <option>YouTube Shorts / Reels</option>
                <option>TikTok</option>
                <option>Podcast Audio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Video Format</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-red-500 focus:ring-red-500">
                <option>Explainer Video</option>
                <option>Talking Head</option>
                <option>Interview</option>
                <option>Tutorial</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
            <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-red-500 focus:ring-red-500" placeholder="e.g. Software Developers looking for AI tools" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Core Topic & Hook</label>
            <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-red-500 focus:ring-red-500" rows={3} placeholder="What is this video about? What is the main hook?" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Duration</label>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border rounded bg-red-50 border-red-200 text-red-700 text-sm">30s - 60s (Shorts)</button>
              <button className="px-3 py-1.5 border rounded bg-white text-gray-600 hover:bg-gray-50 text-sm">3 - 5 Minutes</button>
              <button className="px-3 py-1.5 border rounded bg-white text-gray-600 hover:bg-gray-50 text-sm">10+ Minutes</button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border p-4 rounded-lg bg-gray-50">
          <p>Script & Storyboard Generation is <span className="font-medium text-red-600">Pending Implementation</span>.</p>
          <p className="mt-1">Awaiting Module 010 (Orchestrator) to generate script scenes and prompts.</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50 flex justify-end">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
          Generate Script
        </button>
      </div>
    </div>
  );
}
