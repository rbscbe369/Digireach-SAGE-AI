export type PublishingSourceType = 'BLOG' | 'SOCIAL' | 'EMAIL' | 'VIDEO' | 'PODCAST';
export type PublishingStatus = 'DRAFT' | 'PENDING_APPROVAL' | 'APPROVED' | 'SCHEDULED' | 'PUBLISHING' | 'PUBLISHED' | 'FAILED' | 'REJECTED';
export type PublishingPlatform = 'YOUTUBE' | 'WORDPRESS' | 'LINKEDIN' | 'RESEND' | 'INSTAGRAM' | 'FACEBOOK' | 'TIKTOK' | 'SPOTIFY';

export interface PublishingProjectData {
  id: string;
  name: string;
  sourceType: PublishingSourceType;
  sourceId: string;
  status: PublishingStatus;
  createdAt: string;
  updatedAt: string;
}

export interface PublishingJobData {
  id: string;
  projectId: string;
  status: PublishingStatus;
  scheduledAt?: string;
  publishedAt?: string;
}

export interface PublishingEngineDashboardData {
  queuedJobs: number;
  successRate: number;
  failedJobs: number;
  recentProjects: PublishingProjectData[];
}
