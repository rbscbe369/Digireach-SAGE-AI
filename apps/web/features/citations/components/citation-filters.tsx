import * as React from 'react';

export function CitationFilters() {
  return (
    <aside className="w-64 border-r bg-white p-4 overflow-y-auto hidden md:block">
      <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-gray-500">Filters</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Validation Status</h4>
          <div className="space-y-2">
            {['Validated', 'Pending', 'Broken', 'Outdated'].map(status => (
              <label key={status} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Source Type</h4>
          <div className="space-y-2">
            {['Website', 'Paper', 'Book', 'Journal', 'Report'].map(type => (
              <label key={type} className="flex items-center space-x-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
