export type ResearchStatus = 'QUEUED' | 'PREPARING' | 'SEARCHING' | 'COLLECTING' | 'VERIFYING' | 'ANALYZING' | 'GENERATING_REPORT' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'PAUSED';

export type ResearchDepth = 'QUICK' | 'STANDARD' | 'DEEP' | 'ENTERPRISE' | 'AUTO';

export interface ResearchProject {
  id: string;
  name: string;
  type: string;
  status: ResearchStatus;
  progress: number; // 0-100
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  depth: ResearchDepth;
  sourcesCount: number;
  trustScore: number;
  qualityScore: number;
  estimatedCompletionAt?: string;
}

export interface ResearchInsight {
  id: string;
  type: 'TRENDING' | 'SUGGESTION' | 'MISSING_INFO' | 'COMPETITOR' | 'KEYWORD';
  title: string;
  description: string;
  actionLabel?: string;
  actionPayload?: any;
}

export interface ResearchTemplate {
  id: string;
  name: string;
  category: string;
  config: any;
}

export interface ResearchDashboardData {
  projects: ResearchProject[];
  insights: ResearchInsight[];
  templates: ResearchTemplate[];
  totalCredits: number;
  usedCredits: number;
}
