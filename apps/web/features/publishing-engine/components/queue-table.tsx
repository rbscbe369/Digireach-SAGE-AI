import * as React from 'react';

export function QueueTable() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Publishing Queue</h2>
        <div className="flex gap-2">
          <input type="text" placeholder="Search queue..." className="border rounded p-2 text-sm" />
          <select className="border rounded p-2 text-sm">
            <option>All Statuses</option>
            <option>Queued</option>
            <option>Publishing</option>
            <option>Failed</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-medium text-gray-500">Content</th>
              <th className="p-4 font-medium text-gray-500">Destination</th>
              <th className="p-4 font-medium text-gray-500">Scheduled For</th>
              <th className="p-4 font-medium text-gray-500">Status</th>
              <th className="p-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-700">
            <tr>
              <td className="p-4">
                <p className="font-medium">10 AI Tools to Boost Productivity</p>
                <p className="text-xs text-gray-400">Source: Blog Engine</p>
              </td>
              <td className="p-4">WordPress, LinkedIn</td>
              <td className="p-4">Today, 2:00 PM</td>
              <td className="p-4"><span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Queued</span></td>
              <td className="p-4 text-fuchsia-600 font-medium cursor-pointer">Edit</td>
            </tr>
            <tr>
              <td className="p-4">
                <p className="font-medium">Weekly Newsletter Issue #42</p>
                <p className="text-xs text-gray-400">Source: Email Engine</p>
              </td>
              <td className="p-4">Resend (All Subscribers)</td>
              <td className="p-4">Tomorrow, 9:00 AM</td>
              <td className="p-4"><span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Queued</span></td>
              <td className="p-4 text-fuchsia-600 font-medium cursor-pointer">Edit</td>
            </tr>
            <tr>
              <td className="p-4">
                <p className="font-medium">Product Demo Walkthrough</p>
                <p className="text-xs text-gray-400">Source: Video Engine</p>
              </td>
              <td className="p-4">YouTube</td>
              <td className="p-4">Yesterday, 10:00 AM</td>
              <td className="p-4"><span className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full">Failed</span></td>
              <td className="p-4 text-fuchsia-600 font-medium cursor-pointer">Retry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
