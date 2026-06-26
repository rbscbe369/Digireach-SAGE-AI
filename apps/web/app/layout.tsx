import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/providers/auth-provider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Digireach SAGE AI — Enterprise AI Operating System',
    template: '%s | Digireach SAGE AI',
  },
  description:
    'The world-class Enterprise AI Operating System. Research. Verify. Create. Publish. Grow.',
  keywords: ['AI', 'Enterprise', 'CRM', 'SEO', 'Analytics', 'Automation'],
  authors: [{ name: 'Digireach', url: 'https://digireach.ai' }],
  creator: 'Digireach',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Digireach SAGE AI — Enterprise AI Operating System',
    description:
      'Research. Verify. Create. Publish. Grow. The complete Enterprise AI platform.',
    siteName: 'Digireach SAGE AI',
  },
  robots: {
    index: false, // SaaS app — do not index
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
