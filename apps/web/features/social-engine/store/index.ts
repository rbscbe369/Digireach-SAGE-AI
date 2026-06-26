import { create } from 'zustand';
import { SocialPostData, SocialEngineDashboardData } from '../types';

interface SocialEngineStoreState {
  posts: SocialPostData[];
  currentPost: SocialPostData | null;
  totalPosts: number;
  scheduledCount: number;
  publishedCount: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: SocialEngineDashboardData) => void;
  setPosts: (posts: SocialPostData[]) => void;
  setCurrentPost: (currentPost: SocialPostData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useSocialEngineStore = create<SocialEngineStoreState>((set) => ({
  posts: [],
  currentPost: null,
  totalPosts: 0,
  scheduledCount: 0,
  publishedCount: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ 
    ...data, 
    posts: data.recentPosts,
    isLoading: false, 
    error: null 
  }),
  setPosts: (posts) => set({ posts }),
  setCurrentPost: (currentPost) => set({ currentPost }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
