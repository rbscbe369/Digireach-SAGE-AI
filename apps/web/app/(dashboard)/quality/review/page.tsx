import * as React from 'react';
import { loadQualityDashboardAction } from '@/features/quality-engine/actions';
import { FactValidationPanel } from '@/features/quality-engine/components/fact-validation-panel';
import { QualityScoreCard } from '@/features/quality-engine/components/quality-score-card';

export default async function QualityReviewPage() {
  let data = {
    pendingReviews: 0,
    approvedOutputs: 0,
    rejectedOutputs: 0,
    averageQualityScore: 0
  };
  
  try {
    const response = await loadQualityDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex gap-4 p-6 pb-0">
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-500">{data.pendingReviews}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Reviews</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{data.approvedOutputs}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Approved Outputs</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-red-500">{data.rejectedOutputs}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Rejected Outputs</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">{data.averageQualityScore}/100</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Quality</div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden mt-6">
        <QualityScoreCard />
        <FactValidationPanel />
      </div>
    </div>
  );
}
