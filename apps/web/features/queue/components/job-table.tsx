import * as React from 'react';
import { QueueJob } from '../types';

interface JobTableProps {
  jobs: QueueJob[];
}

export function JobTable({ jobs }: JobTableProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b bg-gray-50/50 flex justify-between items-center">
        <h3 className="font-semibold">Recent Jobs</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 font-medium">Job ID</th>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Queue</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No active jobs found in the queue.
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs text-gray-500">{job.id.substring(0, 8)}...</td>
                  <td className="px-6 py-4 font-medium">{job.name}</td>
                  <td className="px-6 py-4 text-gray-600">{job.queue}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 max-w-[100px]">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${job.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-500">{job.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
