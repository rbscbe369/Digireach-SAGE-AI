/**
 * Authentication integration for apps/web (CRIT-004)
 * Wires NextAuth v5 with database user lookup via @sagemodules/database.
 *
 * NOTE on User model: The Prisma User model (from NextAuth adapter conventions)
 * stores standard fields (id, email, name, emailVerified, image).
 * Organization membership and roles are stored in OrganizationMember.
 * Password hashes are stored in a separate Account/OAuthAccount model.
 *
 * For password auth, we look up the user then check their OrganizationMember record.
 */

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@sagemodules/database';
import { z } from 'zod';

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    authorized({ auth: session, request: { nextUrl } }) {
      const isLoggedIn = !!session?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      const isOnAuth = nextUrl.pathname.startsWith('/auth');

      if ((isOnDashboard || isOnAdmin) && !isLoggedIn) {
        return Response.redirect(new URL('/auth/login', nextUrl));
      }
      if (isOnAuth && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // organizationId and role are injected during authorize()
        token.organizationId = (user as { id?: string; organizationId?: string }).organizationId;
        token.role = (user as { id?: string; role?: string }).role;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        // Extend session with enterprise fields
        (session.user as typeof session.user & { organizationId?: string; role?: string }).organizationId =
          token.organizationId as string | undefined;
        (session.user as typeof session.user & { organizationId?: string; role?: string }).role =
          token.role as string | undefined;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        try {
          // Look up user by email
          const user = await prisma.user.findUnique({
            where: { email },
            select: {
              id: true,
              email: true,
              name: true,
              // Get first active organization membership for this user
              memberships: {
                select: {
                  organizationId: true,
                  role: true,
                },
                take: 1,
                orderBy: { createdAt: 'desc' },
              },
              oauthAccounts: {
                where: { provider: 'credentials' },
                select: { accessToken: true }, // accessToken stores password hash for credentials
                take: 1,
              },
            },
          });

          if (!user) return null;

          const storedHash = user.oauthAccounts[0]?.accessToken;
          if (!storedHash) return null;

          // NOTE: bcrypt.compare() will be used here in Phase 4 Security Hardening.
          // Using direct comparison as placeholder until bcrypt is configured.
          // TODO: Replace with: const valid = await bcrypt.compare(password, storedHash);
          const valid = password === storedHash;

          if (!valid) return null;

          const membership = user.memberships[0];

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            organizationId: membership?.organizationId ?? null,
            role: membership?.role ?? 'VIEWER',
          };
        } catch (error) {
          console.error('[Auth] Authorization error:', error);
          return null;
        }
      },
    }),
  ],
});
