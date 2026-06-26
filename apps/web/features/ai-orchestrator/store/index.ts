import { create } from 'zustand';
import { AiAgentData, WorkflowExecutionData, AiOrchestratorDashboardData } from '../types';

interface AiOrchestratorStoreState {
  agents: AiAgentData[];
  executions: WorkflowExecutionData[];
  selectedExecution: WorkflowExecutionData | null;
  runningExecutions: number;
  completedTasks: number;
  failedTasks: number;
  averageExecutionTime: number;
  averageTokens: number;
  activeAgents: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: AiOrchestratorDashboardData) => void;
  setAgents: (agents: AiAgentData[]) => void;
  setSelectedExecution: (execution: WorkflowExecutionData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAiOrchestratorStore = create<AiOrchestratorStoreState>((set) => ({
  agents: [],
  executions: [],
  selectedExecution: null,
  runningExecutions: 0,
  completedTasks: 0,
  failedTasks: 0,
  averageExecutionTime: 0,
  averageTokens: 0,
  activeAgents: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    executions: data.recentExecutions,
    isLoading: false, 
    error: null 
  }),
  setAgents: (agents) => set({ agents }),
  setSelectedExecution: (selectedExecution) => set({ selectedExecution }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
