import { create } from 'zustand';
import { BlogProjectData, BlogEngineDashboardData } from '../types';

interface BlogEngineStoreState {
  blogs: BlogProjectData[];
  currentBlog: BlogProjectData | null;
  totalBlogs: number;
  draftsCount: number;
  inReviewCount: number;
  publishedCount: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: BlogEngineDashboardData) => void;
  setBlogs: (blogs: BlogProjectData[]) => void;
  setCurrentBlog: (currentBlog: BlogProjectData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useBlogEngineStore = create<BlogEngineStoreState>((set) => ({
  blogs: [],
  currentBlog: null,
  totalBlogs: 0,
  draftsCount: 0,
  inReviewCount: 0,
  publishedCount: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    blogs: data.recentBlogs,
    isLoading: false, 
    error: null 
  }),
  setBlogs: (blogs) => set({ blogs }),
  setCurrentBlog: (currentBlog) => set({ currentBlog }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
