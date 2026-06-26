import { create } from 'zustand';
import { EmailCampaignData, EmailEngineDashboardData } from '../types';

interface EmailEngineStoreState {
  campaigns: EmailCampaignData[];
  currentCampaign: EmailCampaignData | null;
  totalSent: number;
  openRate: number;
  clickRate: number;
  activeAutomations: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: EmailEngineDashboardData) => void;
  setCampaigns: (campaigns: EmailCampaignData[]) => void;
  setCurrentCampaign: (currentCampaign: EmailCampaignData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useEmailEngineStore = create<EmailEngineStoreState>((set) => ({
  campaigns: [],
  currentCampaign: null,
  totalSent: 0,
  openRate: 0,
  clickRate: 0,
  activeAutomations: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    campaigns: data.recentCampaigns,
    isLoading: false, 
    error: null 
  }),
  setCampaigns: (campaigns) => set({ campaigns }),
  setCurrentCampaign: (currentCampaign) => set({ currentCampaign }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
