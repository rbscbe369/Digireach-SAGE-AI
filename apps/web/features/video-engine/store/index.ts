import { create } from 'zustand';
import { VideoProjectData, VideoScriptData, VideoEngineDashboardData } from '../types';

interface VideoEngineStoreState {
  projects: VideoProjectData[];
  currentProject: VideoProjectData | null;
  currentScript: VideoScriptData | null;
  totalProjects: number;
  completedScripts: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: VideoEngineDashboardData) => void;
  setProjects: (projects: VideoProjectData[]) => void;
  setCurrentProject: (currentProject: VideoProjectData | null) => void;
  setCurrentScript: (currentScript: VideoScriptData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useVideoEngineStore = create<VideoEngineStoreState>((set) => ({
  projects: [],
  currentProject: null,
  currentScript: null,
  totalProjects: 0,
  completedScripts: 0,
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
  setCurrentScript: (currentScript) => set({ currentScript }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
