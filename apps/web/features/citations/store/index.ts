import { create } from 'zustand';
import { CitationData, CitationDashboardData } from '../types';

interface CitationStoreState {
  citations: CitationData[];
  selectedCitation: CitationData | null;
  filters: Record<string, string>;
  search: string;
  totalCount: number;
  validatedCount: number;
  pendingCount: number;
  brokenCount: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: CitationDashboardData) => void;
  setSearch: (search: string) => void;
  setSelectedCitation: (citation: CitationData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCitationStore = create<CitationStoreState>((set) => ({
  citations: [],
  selectedCitation: null,
  filters: {},
  search: '',
  totalCount: 0,
  validatedCount: 0,
  pendingCount: 0,
  brokenCount: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ ...data, isLoading: false, error: null }),
  setSearch: (search) => set({ search }),
  setSelectedCitation: (selectedCitation) => set({ selectedCitation }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
