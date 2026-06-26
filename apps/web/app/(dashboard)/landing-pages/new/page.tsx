import * as React from 'react';
import type { LandingPageEngineDashboardData } from '@/features/landing-page-engine/types';
import { loadLandingDashboardAction } from '@/features/landing-page-engine/actions';
import { ConversionPanel } from '@/features/landing-page-engine/components/conversion-panel';
import { LandingPageWizard } from '@/features/landing-page-engine/components/landing-wizard';

export default async function NewLandingPage() {
  let data: LandingPageEngineDashboardData = {
    totalPages: 0,
    draftsCount: 0,
    publishedCount: 0,
    recentProjects: []
  };
  
  try {
    const response = await loadLandingDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <LandingPageWizard />
        <ConversionPanel />
      </div>
    </div>
  );
}
