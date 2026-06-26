export type SocialGoal = 'AWARENESS' | 'LEAD_GEN' | 'ENGAGEMENT' | 'SALES' | 'EDUCATION' | 'COMMUNITY';
export type SocialStatus = 'DRAFT' | 'IN_REVIEW' | 'APPROVED' | 'SCHEDULED' | 'PUBLISHED' | 'REJECTED';
export type SocialPlatformType = 'LINKEDIN' | 'TWITTER' | 'INSTAGRAM' | 'FACEBOOK' | 'THREADS';

export interface SocialProjectData {
  id: string;
  name: string;
  goal: SocialGoal;
  status: SocialStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SocialPostData {
  id: string;
  title: string;
  contentType: string;
  status: SocialStatus;
  platforms: SocialPlatformType[];
  createdAt: string;
}

export interface SocialEngineDashboardData {
  totalPosts: number;
  scheduledCount: number;
  publishedCount: number;
  recentPosts: SocialPostData[];
}
