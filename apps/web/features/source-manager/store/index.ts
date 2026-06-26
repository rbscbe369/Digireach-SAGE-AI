import { create } from 'zustand';
import { SourceData, SourceManagerDashboardData } from '../types';

interface SourceManagerStoreState {
  sources: SourceData[];
  selectedSource: SourceData | null;
  filters: Record<string, string>;
  search: string;
  verifiedCount: number;
  pendingCount: number;
  rejectedCount: number;
  averageTrustScore: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: SourceManagerDashboardData) => void;
  setSearch: (search: string) => void;
  setSelectedSource: (source: SourceData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useSourceManagerStore = create<SourceManagerStoreState>((set) => ({
  sources: [],
  selectedSource: null,
  filters: {},
  search: '',
  verifiedCount: 0,
  pendingCount: 0,
  rejectedCount: 0,
  averageTrustScore: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ ...data, isLoading: false, error: null }),
  setSearch: (search) => set({ search }),
  setSelectedSource: (selectedSource) => set({ selectedSource }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
