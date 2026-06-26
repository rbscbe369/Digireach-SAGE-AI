import { create } from 'zustand';
import { LandingProjectData, LandingPageEngineDashboardData } from '../types';

interface LandingPageEngineStoreState {
  projects: LandingProjectData[];
  currentProject: LandingProjectData | null;
  totalPages: number;
  draftsCount: number;
  publishedCount: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: LandingPageEngineDashboardData) => void;
  setProjects: (projects: LandingProjectData[]) => void;
  setCurrentProject: (currentProject: LandingProjectData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useLandingPageStore = create<LandingPageEngineStoreState>((set) => ({
  projects: [],
  currentProject: null,
  totalPages: 0,
  draftsCount: 0,
  publishedCount: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    projects: data.recentProjects,
    isLoading: false, 
    error: null 
  }),
  setProjects: (projects) => set({ projects }),
  setCurrentProject: (currentProject) => set({ currentProject }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
