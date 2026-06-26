import * as React from 'react';
import type { SocialEngineDashboardData } from '@/features/social-engine/types';
import { loadSocialDashboardAction } from '@/features/social-engine/actions';
import { PlatformSelector } from '@/features/social-engine/components/platform-selector';
import { SocialWizard } from '@/features/social-engine/components/social-wizard';

export default async function NewSocialPostPage() {
  let data: SocialEngineDashboardData = {
    totalPosts: 0,
    scheduledCount: 0,
    publishedCount: 0,
    recentPosts: []
  };
  
  try {
    const response = await loadSocialDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <SocialWizard />
        <PlatformSelector />
      </div>
    </div>
  );
}
