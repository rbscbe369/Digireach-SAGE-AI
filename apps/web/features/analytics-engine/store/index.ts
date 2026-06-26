import { create } from 'zustand';
import { AnalyticsKpiData, AnalyticsRoiData, AnalyticsForecastData, AnalyticsEngineDashboardData } from '../types';

interface AnalyticsEngineStoreState {
  overviewKpis: AnalyticsKpiData[];
  revenueForecast: AnalyticsForecastData | null;
  topCampaignsRoi: AnalyticsRoiData[];
  activeAlerts: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: AnalyticsEngineDashboardData) => void;
  setOverviewKpis: (kpis: AnalyticsKpiData[]) => void;
  setRevenueForecast: (forecast: AnalyticsForecastData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAnalyticsEngineStore = create<AnalyticsEngineStoreState>((set) => ({
  overviewKpis: [],
  revenueForecast: null,
  topCampaignsRoi: [],
  activeAlerts: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data,
    isLoading: false, 
    error: null 
  }),
  setOverviewKpis: (kpis) => set({ overviewKpis: kpis }),
  setRevenueForecast: (forecast) => set({ revenueForecast: forecast }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
