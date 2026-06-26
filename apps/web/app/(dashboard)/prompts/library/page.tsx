import * as React from 'react';
import { loadPromptEngineDashboardAction } from '@/features/prompt-engine/actions';
import { PromptLibraryPanel } from '@/features/prompt-engine/components/prompt-library';
import { PromptEditorPlaceholder } from '@/features/prompt-engine/components/prompt-editor-placeholder';

export default async function PromptLibraryPage() {
  let data = {
    totalPrompts: 0,
    activeVersions: 0,
    pendingApproval: 0,
    averageQualityScore: 0
  };
  
  try {
    const response = await loadPromptEngineDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex gap-4 p-6 pb-0">
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-teal-600">{data.totalPrompts}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Prompts</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold">{data.activeVersions}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Active Versions</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-500">{data.pendingApproval}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Approval</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{data.averageQualityScore}/100</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Quality</div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden mt-6">
        <PromptLibraryPanel />
        <PromptEditorPlaceholder />
      </div>
    </div>
  );
}
