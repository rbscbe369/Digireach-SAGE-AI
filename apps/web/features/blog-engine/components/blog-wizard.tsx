import * as React from 'react';

export function BlogWizard() {
  return (
    <div className="relative flex-1 bg-white border rounded-xl m-6 shadow-sm flex flex-col overflow-hidden max-w-3xl mx-auto w-full">
      <div className="border-b bg-gray-50/50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Blog Creation Wizard</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 10: Choose Blog Goal</p>
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Keyword</label>
            <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-teal-500 focus:ring-teal-500" placeholder="e.g. Enterprise AI Optimization" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blog Goal</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-teal-500 focus:ring-teal-500">
              <option>Educational</option>
              <option>Commercial</option>
              <option>Listicle</option>
              <option>Case Study</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Length</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:border-teal-500 focus:ring-teal-500">
              <option>Auto</option>
              <option>1500 Words</option>
              <option>2500 Words</option>
              <option>5000+ Words</option>
            </select>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border p-4 rounded-lg bg-gray-50">
          <p>Generation is currently <span className="font-medium text-teal-600">Pending Implementation</span>.</p>
          <p className="mt-1">Awaiting Module 010 (Orchestrator) and BullMQ Workers.</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50 flex justify-end">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors">
          Generate Outline
        </button>
      </div>
    </div>
  );
}
