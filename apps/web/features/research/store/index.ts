import { create } from 'zustand';
import { ResearchProject, ResearchInsight, ResearchTemplate, ResearchDashboardData } from '../types';

interface ResearchDashboardStoreState {
  projects: ResearchProject[];
  selectedProject: ResearchProject | null;
  filters: Record<string, string>;
  queue: any[];
  templates: ResearchTemplate[];
  insights: ResearchInsight[];
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: ResearchDashboardData) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Record<string, string>) => void;
  setSelectedProject: (project: ResearchProject | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useResearchDashboardStore = create<ResearchDashboardStoreState>((set) => ({
  projects: [],
  selectedProject: null,
  filters: {},
  queue: [],
  templates: [],
  insights: [],
  searchQuery: '',
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ ...data, isLoading: false, error: null }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilters: (filters) => set({ filters }),
  setSelectedProject: (selectedProject) => set({ selectedProject }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
