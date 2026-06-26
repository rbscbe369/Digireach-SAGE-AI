import * as React from 'react';
import type { ContentStudioDashboardData } from '@/features/content-studio/types';
import { loadContentDashboardAction } from '@/features/content-studio/actions';
import { AIAssistantPanel } from '@/features/content-studio/components/ai-assistant-panel';
import { RichEditorPlaceholder } from '@/features/content-studio/components/rich-editor-placeholder';

export default async function ContentEditorPage() {
  let data: ContentStudioDashboardData = {
    totalDocuments: 0,
    draftsCount: 0,
    inReviewCount: 0,
    publishedCount: 0,
    recentDocuments: []
  };
  
  try {
    const response = await loadContentDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <RichEditorPlaceholder />
        <AIAssistantPanel />
      </div>
    </div>
  );
}
