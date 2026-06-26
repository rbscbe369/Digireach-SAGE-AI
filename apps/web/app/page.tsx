import { redirect } from 'next/navigation';

/**
 * Root page — redirects authenticated users to the dashboard,
 * unauthenticated users are intercepted by middleware and sent to /auth/login.
 * This keeps the root URL clean and avoids a default Next.js scaffold page.
 */
export default function RootPage() {
  redirect('/dashboard');
}
