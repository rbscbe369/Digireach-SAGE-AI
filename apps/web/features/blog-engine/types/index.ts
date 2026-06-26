export type BlogStatus = 'DRAFT' | 'GENERATING' | 'IN_REVIEW' | 'APPROVED' | 'PUBLISHED' | 'ARCHIVED' | 'REJECTED';
export type BlogGoal = 'EDUCATIONAL' | 'COMMERCIAL' | 'TRANSACTIONAL' | 'COMPARISON' | 'LISTICLE' | 'GUIDE' | 'CASE_STUDY' | 'NEWS';

export interface BlogProjectData {
  id: string;
  title: string;
  goal: BlogGoal;
  targetAudience: string;
  brandVoice: string;
  status: BlogStatus;
  wordCount: number;
  seoScore: number;
  qualityScore: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogEngineDashboardData {
  totalBlogs: number;
  draftsCount: number;
  inReviewCount: number;
  publishedCount: number;
  recentBlogs: BlogProjectData[];
}
