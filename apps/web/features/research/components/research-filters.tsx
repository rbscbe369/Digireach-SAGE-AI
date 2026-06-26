'use client';

import * as React from 'react';
import { useResearchDashboardStore } from '../store';

export function ResearchFilters() {
  const { filters, setFilters } = useResearchDashboardStore();

  const handleCheckboxChange = (category: string, value: string) => {
    const current = filters[category] ? filters[category].split(',') : [];
    let updated: string[];
    if (current.includes(value)) {
      updated = current.filter(item => item !== value);
    } else {
      updated = [...current, value];
    }
    
    const newFilters = { ...filters };
    if (updated.length > 0) {
      newFilters[category] = updated.join(',');
    } else {
      delete newFilters[category];
    }
    setFilters(newFilters);
  };

  const isChecked = (category: string, value: string) => {
    const current = filters[category] ? filters[category].split(',') : [];
    return current.includes(value);
  };

  return (
    <aside className="w-64 border-r bg-white p-4 overflow-y-auto hidden md:block">
      <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-gray-500">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Status</h4>
          <div className="space-y-2">
            {['Active', 'Completed', 'Queued', 'Failed'].map(status => (
              <label key={status} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={isChecked('status', status.toUpperCase())}
                  onChange={() => handleCheckboxChange('status', status.toUpperCase())}
                />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Depth</h4>
          <div className="space-y-2">
            {['Quick', 'Standard', 'Deep', 'Enterprise'].map(depth => (
              <label key={depth} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={isChecked('depth', depth.toUpperCase())}
                  onChange={() => handleCheckboxChange('depth', depth.toUpperCase())}
                />
                <span>{depth}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
