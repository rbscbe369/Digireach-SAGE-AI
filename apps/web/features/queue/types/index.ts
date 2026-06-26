export type QueueJobStatus = 'PENDING' | 'QUEUED' | 'PREPARING' | 'RUNNING' | 'PAUSED' | 'RETRYING' | 'COMPLETED' | 'CANCELLED' | 'FAILED' | 'ARCHIVED';

export interface QueueJob {
  id: string;
  name: string;
  queue: string;
  status: QueueJobStatus;
  priority: number;
  progress: number;
  retryCount: number;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
}

export interface QueueWorker {
  id: string;
  name: string;
  queue: string;
  status: 'IDLE' | 'BUSY' | 'PAUSED' | 'OFFLINE';
  currentJobId?: string;
  cpuUsage?: number;
  memoryUsage?: number;
  lastHeartbeat: string;
}

export interface QueueHealth {
  latencyMs: number;
  waitingJobs: number;
  activeJobs: number;
  errorRate: number;
  successRate: number;
  healthScore: number;
}

export interface ProviderUsageMetrics {
  provider: string;
  active: boolean;
  tokensPrompt: number;
  tokensCompletion: number;
  costUsd: number;
  latencyMs: number;
}

export interface QueueDashboardData {
  jobs: QueueJob[];
  workers: QueueWorker[];
  health: QueueHealth;
  providers: ProviderUsageMetrics[];
}
