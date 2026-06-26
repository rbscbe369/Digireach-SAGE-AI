import { create } from 'zustand';
import { OptimizationDashboardData, OptimizationRecommendationData } from '../types';

interface OptimizationStoreState {
  todaysCost: number;
  todaysTokens: number;
  tokensSaved: number;
  moneySaved: number;
  cacheHitRate: number;
  averageRequestCost: number;
  optimizationScore: number;
  recommendations: OptimizationRecommendationData[];
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: OptimizationDashboardData) => void;
  setRecommendations: (recommendations: OptimizationRecommendationData[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useOptimizationStore = create<OptimizationStoreState>((set) => ({
  todaysCost: 0,
  todaysTokens: 0,
  tokensSaved: 0,
  moneySaved: 0,
  cacheHitRate: 0,
  averageRequestCost: 0,
  optimizationScore: 0,
  recommendations: [],
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    recommendations: data.recentRecommendations,
    isLoading: false, 
    error: null 
  }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
