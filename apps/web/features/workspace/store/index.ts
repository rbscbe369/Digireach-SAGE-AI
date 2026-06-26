import { create } from 'zustand';
import { WorkspaceStateData, WorkspaceSettings, WorkspaceBranding, WorkspaceMember, WorkspaceIntegration } from '../types';

interface WorkspaceStoreState {
  settings: WorkspaceSettings | null;
  branding: WorkspaceBranding | null;
  members: WorkspaceMember[];
  integrations: WorkspaceIntegration[];
  isLoading: boolean;
  error: string | null;
  setWorkspaceData: (data: WorkspaceStateData) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWorkspaceStore = create<WorkspaceStoreState>((set) => ({
  settings: null,
  branding: null,
  members: [],
  integrations: [],
  isLoading: false,
  error: null,
  setWorkspaceData: (data) => set({ ...data, isLoading: false, error: null }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
