export type PromptStatus = 'DRAFT' | 'REVIEW' | 'APPROVED' | 'PUBLISHED' | 'DEPRECATED';

export interface PromptVersionData {
  id: string;
  versionNumber: string;
  templateString: string;
  status: PromptStatus;
  createdAt: string;
}

export interface PromptEntityData {
  id: string;
  name: string;
  description?: string;
  status: PromptStatus;
  categoryId?: string;
  ownerId?: string;
  activeVersionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PromptEngineDashboardData {
  totalPrompts: number;
  activeVersions: number;
  pendingApproval: number;
  averageQualityScore: number;
  recentPrompts: PromptEntityData[];
}
