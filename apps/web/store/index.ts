import { create } from 'zustand';

// ---------------------------------------------------------
// Authentication Store
// ---------------------------------------------------------
interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  workspaceId: string | null;
  setAuth: (user: any, workspaceId: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  workspaceId: null,
  setAuth: (user, workspaceId) => set({ isAuthenticated: true, user, workspaceId }),
  logout: () => set({ isAuthenticated: false, user: null, workspaceId: null }),
}));

// ---------------------------------------------------------
// Notification Store
// ---------------------------------------------------------
interface NotificationState {
  notifications: any[];
  addNotification: (notification: any) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) => set((state) => ({ notifications: [...state.notifications, notification] })),
  clearNotifications: () => set({ notifications: [] }),
}));
