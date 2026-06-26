import { create } from 'zustand';
import { QueueJob, QueueWorker, QueueHealth, ProviderUsageMetrics, QueueDashboardData } from '../types';

interface QueueStoreState {
  jobs: QueueJob[];
  workers: QueueWorker[];
  health: QueueHealth | null;
  providers: ProviderUsageMetrics[];
  selectedJob: QueueJob | null;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: QueueDashboardData) => void;
  setSelectedJob: (job: QueueJob | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useQueueStore = create<QueueStoreState>((set) => ({
  jobs: [],
  workers: [],
  health: null,
  providers: [],
  selectedJob: null,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ ...data, isLoading: false, error: null }),
  setSelectedJob: (selectedJob) => set({ selectedJob }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
