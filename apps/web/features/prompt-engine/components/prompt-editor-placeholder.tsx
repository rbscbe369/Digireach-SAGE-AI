import * as React from 'react';

export function PromptEditorPlaceholder() {
  return (
    <div className="relative flex-1 bg-gray-50/50 border rounded-xl overflow-hidden m-6 shadow-inner flex flex-col">
      <div className="border-b bg-white p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">SEO Article Generator v1.2.0</h2>
          <p className="text-xs text-gray-500 mt-1">Status: <span className="text-teal-600 font-medium">PUBLISHED</span></p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border rounded text-sm hover:bg-gray-50">Test</button>
          <button className="px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">Edit Draft</button>
        </div>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4 animate-pulse">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Prompt Editor Environment</h3>
          <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
            Awaiting Monaco Editor integration and Variable autocomplete engine.
          </p>
        </div>
      </div>
    </div>
  );
}
