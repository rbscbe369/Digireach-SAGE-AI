import { create } from 'zustand';
import { QualityReviewData, QualityEngineDashboardData } from '../types';

interface QualityEngineStoreState {
  reviews: QualityReviewData[];
  selectedReview: QualityReviewData | null;
  pendingReviews: number;
  approvedOutputs: number;
  rejectedOutputs: number;
  averageQualityScore: number;
  averageConfidence: number;
  averageCitationCoverage: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: QualityEngineDashboardData) => void;
  setReviews: (reviews: QualityReviewData[]) => void;
  setSelectedReview: (selectedReview: QualityReviewData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useQualityEngineStore = create<QualityEngineStoreState>((set) => ({
  reviews: [],
  selectedReview: null,
  pendingReviews: 0,
  approvedOutputs: 0,
  rejectedOutputs: 0,
  averageQualityScore: 0,
  averageConfidence: 0,
  averageCitationCoverage: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    reviews: data.recentReviews,
    isLoading: false, 
    error: null 
  }),
  setReviews: (reviews) => set({ reviews }),
  setSelectedReview: (selectedReview) => set({ selectedReview }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
