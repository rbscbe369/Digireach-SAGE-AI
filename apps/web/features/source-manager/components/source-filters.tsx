import * as React from 'react';

export function SourceFilters() {
  return (
    <aside className="w-64 border-r bg-white p-4 overflow-y-auto hidden md:block">
      <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-gray-500">Filters</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Verification Status</h4>
          <div className="space-y-2">
            {['Verified', 'Pending', 'Needs Review', 'Rejected'].map(status => (
              <label key={status} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Category</h4>
          <div className="space-y-2">
            {['Government', 'Academic', 'News', 'Official Doc', 'Blog'].map(cat => (
              <label key={cat} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
