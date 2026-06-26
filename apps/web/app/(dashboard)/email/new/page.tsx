import * as React from 'react';
import type { EmailEngineDashboardData } from '@/features/email-engine/types';
import { loadEmailDashboardAction } from '@/features/email-engine/actions';
import { DeliverabilityPanel } from '@/features/email-engine/components/deliverability-panel';
import { EmailWizard } from '@/features/email-engine/components/email-wizard';

export default async function NewEmailPage() {
  let data: EmailEngineDashboardData = {
    totalSent: 0,
    openRate: 0,
    clickRate: 0,
    activeAutomations: 0,
    recentCampaigns: []
  };
  
  try {
    const response = await loadEmailDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <EmailWizard />
        <DeliverabilityPanel />
      </div>
    </div>
  );
}
