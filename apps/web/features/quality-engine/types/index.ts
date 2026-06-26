export type QualityReviewStatus = 'DRAFT' | 'PENDING_REVIEW' | 'NEEDS_IMPROVEMENT' | 'APPROVED' | 'REJECTED';

export interface QualityReviewData {
  id: string;
  targetId: string;
  targetType: string;
  status: QualityReviewStatus;
  overallScore: number | null;
  confidenceScore: number | null;
  reviewedBy: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FactValidationData {
  id: string;
  claim: string;
  isVerified: boolean;
  sourceId: string | null;
  confidenceScore: number;
}

export interface QualityEngineDashboardData {
  pendingReviews: number;
  approvedOutputs: number;
  rejectedOutputs: number;
  averageQualityScore: number;
  averageConfidence: number;
  averageCitationCoverage: number;
  recentReviews: QualityReviewData[];
}
