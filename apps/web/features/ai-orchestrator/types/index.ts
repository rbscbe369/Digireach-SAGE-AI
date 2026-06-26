export type AgentStatus = 'AVAILABLE' | 'BUSY' | 'PAUSED' | 'DISABLED' | 'FAILED';
export type ExecutionStatus = 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

export interface AiAgentData {
  id: string;
  name: string;
  description?: string;
  status: AgentStatus;
  version: string;
  capabilities: string[];
}

export interface WorkflowExecutionData {
  id: string;
  templateId?: string;
  status: ExecutionStatus;
  startedAt?: string;
  completedAt?: string;
  input?: any;
  output?: any;
}

export interface AiOrchestratorDashboardData {
  runningExecutions: number;
  completedTasks: number;
  failedTasks: number;
  averageExecutionTime: number; // in seconds
  averageTokens: number;
  activeAgents: number;
  recentExecutions: WorkflowExecutionData[];
}
