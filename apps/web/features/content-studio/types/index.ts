export type ContentStatus = 'DRAFT' | 'GENERATING' | 'IN_REVIEW' | 'APPROVED' | 'PUBLISHED' | 'ARCHIVED' | 'REJECTED';
export type ContentType = 'BLOG' | 'LANDING_PAGE' | 'EMAIL' | 'SOCIAL_POST' | 'CUSTOM';

export interface ContentDocumentData {
  id: string;
  title: string;
  contentType: ContentType;
  status: ContentStatus;
  content: string;
  wordCount: number;
  readingTimeMin: number;
  seoScore: number | null;
  qualityScore: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface ContentStudioDashboardData {
  totalDocuments: number;
  draftsCount: number;
  inReviewCount: number;
  publishedCount: number;
  recentDocuments: ContentDocumentData[];
}
