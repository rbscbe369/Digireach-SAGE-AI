import * as React from 'react';

export function StoryboardBuilder() {
  return (
    <aside className="w-96 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Storyboard & Prompts</h3>
        <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">No Script</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Scene Breakdown</h4>
          <div className="p-3 border rounded-lg bg-gray-50 text-sm">
            <p className="text-xs text-gray-500 mb-2">Generate a script first to automatically split it into scenes.</p>
            <div className="space-y-2 opacity-50">
              <div className="bg-white p-2 border rounded shadow-sm">
                <span className="font-semibold text-xs">Scene 1 (0:00-0:05)</span>
                <p className="text-xs mt-1 truncate">Visual: Wide shot of...</p>
              </div>
              <div className="bg-white p-2 border rounded shadow-sm">
                <span className="font-semibold text-xs">Scene 2 (0:05-0:15)</span>
                <p className="text-xs mt-1 truncate">Visual: Close up on...</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Visual Prompts</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-between bg-gray-50 p-2 border rounded">
              <span>Image Gen (Midjourney)</span>
              <button className="text-xs text-red-600 font-medium">Generate</button>
            </li>
            <li className="flex items-center justify-between bg-gray-50 p-2 border rounded">
              <span>Video Gen (Runway/Sora)</span>
              <button className="text-xs text-red-600 font-medium">Generate</button>
            </li>
          </ul>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Voiceover (SSML)</h4>
          <button className="w-full text-center px-3 py-2 border border-red-200 bg-red-50 text-red-700 rounded-md text-sm hover:bg-red-100 transition-colors">
            Configure Voice ID
          </button>
        </div>
      </div>
    </aside>
  );
}
