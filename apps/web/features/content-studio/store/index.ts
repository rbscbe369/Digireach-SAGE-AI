import { create } from 'zustand';
import { ContentDocumentData, ContentStudioDashboardData } from '../types';

interface ContentStudioStoreState {
  documents: ContentDocumentData[];
  currentDocument: ContentDocumentData | null;
  totalDocuments: number;
  draftsCount: number;
  inReviewCount: number;
  publishedCount: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: ContentStudioDashboardData) => void;
  setDocuments: (documents: ContentDocumentData[]) => void;
  setCurrentDocument: (document: ContentDocumentData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useContentStudioStore = create<ContentStudioStoreState>((set) => ({
  documents: [],
  currentDocument: null,
  totalDocuments: 0,
  draftsCount: 0,
  inReviewCount: 0,
  publishedCount: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    documents: data.recentDocuments,
    isLoading: false, 
    error: null 
  }),
  setDocuments: (documents) => set({ documents }),
  setCurrentDocument: (currentDocument) => set({ currentDocument }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
