export type SourceVerificationStatus = 'PENDING' | 'VERIFIED' | 'NEEDS_REVIEW' | 'OUTDATED' | 'DUPLICATE' | 'BROKEN' | 'REJECTED' | 'ARCHIVED';

export interface SourceMetadata {
  id: string;
  sourceId: string;
  summary?: string;
  canonicalUrl?: string;
  brokenLink: boolean;
  schemaData?: any;
}

export interface SourceData {
  id: string;
  title: string;
  url: string;
  domain: string;
  category: string;
  publisher?: string;
  author?: string;
  publishedAt?: string;
  language: string;
  country?: string;
  trustScore: number;
  status: SourceVerificationStatus;
  createdAt: string;
  updatedAt: string;
  metadata?: SourceMetadata;
}

export interface SourceManagerDashboardData {
  sources: SourceData[];
  verifiedCount: number;
  pendingCount: number;
  rejectedCount: number;
  averageTrustScore: number;
}
