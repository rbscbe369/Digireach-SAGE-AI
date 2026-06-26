export type LandingGoal = 'LEAD_GEN' | 'SALES' | 'WEBINAR' | 'BOOKINGS' | 'CALLS' | 'NEWSLETTER' | 'BRAND_AWARENESS';
export type LandingStatus = 'DRAFT' | 'GENERATING' | 'IN_REVIEW' | 'PUBLISHED' | 'ARCHIVED';

export interface LandingProjectData {
  id: string;
  name: string;
  businessType: string;
  industry: string;
  goal: LandingGoal;
  targetAudience: string;
  brandVoice: string;
  status: LandingStatus;
  createdAt: string;
  updatedAt: string;
}

export interface LandingPageEngineDashboardData {
  totalPages: number;
  draftsCount: number;
  publishedCount: number;
  recentProjects: LandingProjectData[];
}
