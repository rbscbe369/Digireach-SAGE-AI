export type CitationStatus = 'PENDING' | 'VALIDATED' | 'BROKEN' | 'OUTDATED';

export interface CitationMetadata {
  id: string;
  issue?: string;
  volume?: string;
  pages?: string;
  edition?: string;
  accessedAt?: string;
}

export interface CitationData {
  id: string;
  sourceId: string;
  title: string;
  type: string;
  style: string;
  formattedText: string;
  inTextCitation?: string;
  author?: string;
  publisher?: string;
  url?: string;
  doi?: string;
  isbn?: string;
  usageCount: number;
  status: CitationStatus;
  lastValidated?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: CitationMetadata;
}

export interface CitationDashboardData {
  citations: CitationData[];
  totalCount: number;
  validatedCount: number;
  pendingCount: number;
  brokenCount: number;
}
