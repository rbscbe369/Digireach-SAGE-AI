import { create } from 'zustand';

interface CrmState {
  customers: any[];
  leads: any[];
  deals: any[];
  pipelines: any[];
  loading: boolean;
  error: string | null;

  // Actions
  loadDashboard: () => Promise<void>;
  createLead: (leadData: any) => Promise<void>;
  convertLeadToCustomer: (leadId: string) => Promise<void>;
  createDeal: (dealData: any) => Promise<void>;
  updateDealStage: (dealId: string, stageId: string) => Promise<void>;
}

export const useCrmStore = create<CrmState>((set) => ({
  customers: [],
  leads: [],
  deals: [],
  pipelines: [],
  loading: false,
  error: null,

  loadDashboard: async () => {
    set({ loading: true, error: null });
    try {
      // In a real app, fetch from server action
      set({ loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  createLead: async (leadData) => { /* Implement */ },
  convertLeadToCustomer: async (leadId) => { /* Implement */ },
  createDeal: async (dealData) => { /* Implement */ },
  updateDealStage: async (dealId, stageId) => { /* Implement */ }
}));
