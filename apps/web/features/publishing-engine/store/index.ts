import { create } from 'zustand';
import { PublishingProjectData, PublishingJobData, PublishingEngineDashboardData } from '../types';

interface PublishingEngineStoreState {
  projects: PublishingProjectData[];
  currentProject: PublishingProjectData | null;
  queuedJobs: number;
  successRate: number;
  failedJobs: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: PublishingEngineDashboardData) => void;
  setProjects: (projects: PublishingProjectData[]) => void;
  setCurrentProject: (currentProject: PublishingProjectData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePublishingEngineStore = create<PublishingEngineStoreState>((set) => ({
  projects: [],
  currentProject: null,
  queuedJobs: 0,
  successRate: 0,
  failedJobs: 0,
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
