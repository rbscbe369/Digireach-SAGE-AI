import * as React from 'react';
import type { VideoEngineDashboardData } from '@/features/video-engine/types';
import { loadVideoDashboardAction } from '@/features/video-engine/actions';
import { StoryboardBuilder } from '@/features/video-engine/components/storyboard-builder';
import { VideoWizard } from '@/features/video-engine/components/video-wizard';

export default async function NewVideoPage() {
  let data: VideoEngineDashboardData = {
    totalProjects: 0,
    completedScripts: 0,
    recentProjects: []
  };
  
  try {
    const response = await loadVideoDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <VideoWizard />
        <StoryboardBuilder />
      </div>
    </div>
  );
}
