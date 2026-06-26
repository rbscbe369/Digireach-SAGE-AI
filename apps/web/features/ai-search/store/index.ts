import { create } from 'zustand';
import { AiSearchDashboardData, AiSearchRecommendationData, AiSearchScoreData } from '../types';

interface AiSearchStoreState {
  dashboard: AiSearchDashboardData | null;
  scores: AiSearchScoreData | null;
  recommendations: AiSearchRecommendationData[];
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: AiSearchDashboardData) => void;
  setRecommendations: (recs: AiSearchRecommendationData[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAiSearchStore = create<AiSearchStoreState>((set) => ({
  dashboard: null,
  scores: null,
  recommendations: [],
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    dashboard: data,
    scores: data.scores,
    recommendations: data.recentRecommendations,
    isLoading: false, 
    error: null 
  }),
  setRecommendations: (recs) => set({ recommendations: recs }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
