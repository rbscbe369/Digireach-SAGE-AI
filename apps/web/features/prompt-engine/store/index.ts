import { create } from 'zustand';
import { PromptEntityData, PromptVersionData, PromptEngineDashboardData } from '../types';

interface PromptEngineStoreState {
  prompts: PromptEntityData[];
  selectedPrompt: PromptEntityData | null;
  versions: PromptVersionData[];
  totalPrompts: number;
  activeVersions: number;
  pendingApproval: number;
  averageQualityScore: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: PromptEngineDashboardData) => void;
  setPrompts: (prompts: PromptEntityData[]) => void;
  setSelectedPrompt: (selectedPrompt: PromptEntityData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePromptEngineStore = create<PromptEngineStoreState>((set) => ({
  prompts: [],
  selectedPrompt: null,
  versions: [],
  totalPrompts: 0,
  activeVersions: 0,
  pendingApproval: 0,
  averageQualityScore: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    prompts: data.recentPrompts,
    isLoading: false, 
    error: null 
  }),
  setPrompts: (prompts) => set({ prompts }),
  setSelectedPrompt: (selectedPrompt) => set({ selectedPrompt }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
