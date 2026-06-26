# Digireach SAGE AI — Architecture Discovery & Validation Report
## Phase 1 | Production Integration Audit

**Date:** 2026-06-26  
**Scope:** All 50 modules, `apps/web`, `packages/*`  
**Auditor:** Chief Software Architect (Antigravity)  
**Status:** Analysis Complete — No Modifications Made

---

## Executive Summary

| Severity | Count |
|---|---|
| 🔴 Critical | 7 |
| 🟠 High | 9 |
| 🟡 Medium | 8 |
| 🟢 Low | 6 |
| **Total** | **30** |

The platform architecture is sound at the structural and schema level. All 50 module schemas compile and validate successfully. The core issues are concentrated in three areas: (1) missing CSS design tokens that will cause `bg-card`, `text-muted-foreground`, and similar classes to render with no effect, (2) a split app directory (`src/app` vs `app/`) creating routing ambiguity, and (3) workspace package references that are not wired into `apps/web/package.json`.

---

## 🔴 CRITICAL ISSUES

---

### CRIT-001 — Dual App Directory (Routing Conflict)

**Description:**  
Two competing `app/` directories exist simultaneously:
- `apps/web/src/app/` — contains `layout.tsx`, `page.tsx`, `globals.css` (the original Next.js scaffold root)
- `apps/web/app/` — contains all 33 route files and 48 dashboard subroutes (built during Modules 001–050)

Next.js will only process **one** root App Router directory. With both present, the behavior is undefined and depends on which Next.js resolves first — the production build will either silently ignore all module routes or throw a build conflict.

**Affected Modules:** All 50 modules (every dashboard route)  
**Root Cause:** The original project was scaffolded with `src/app/` by `create-next-app`, then all module routes were built into `app/` (without `src/` prefix), creating a split.  
**Recommended Fix:** Consolidate — move `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/globals.css` into `app/`, then delete `src/app/`. Update `tsconfig.json` paths to remove the `src/` prefix or keep it consistently.  
**Estimated Impact:** Build failure in production if not resolved.  
**Dependencies:** Must be fixed before any build attempt (Phase 2 gate).

---

### CRIT-002 — Missing CSS Design Tokens

**Description:**  
`apps/web/src/app/globals.css` defines only `--background` and `--foreground`. However, the existing components use Tailwind semantic tokens that are undefined:
- `bg-card` — used in `card.tsx`
- `text-card-foreground` — used in `card.tsx`
- `text-muted-foreground` — used in 12+ files (dashboard, research, workspace)
- `bg-foreground`, `text-background` — used in `src/app/page.tsx`

Since Tailwind v4 requires `@theme inline` declarations for custom color tokens, these classes will produce **no CSS output** — rendering components as transparent/invisible.

**Affected Modules:** Dashboard (Mod 003), Research (Mod 005), Content Studio, Workspace, Analytics, all components using `card.tsx`  
**Root Cause:** The CSS globals file was not updated when the shared component library was built. `card.tsx` was written assuming a Shadcn/UI token system, but those tokens were never defined in CSS.  
**Recommended Fix:** Add the full semantic token set to `globals.css` (`--card`, `--card-foreground`, `--muted`, `--muted-foreground`, `--border`, `--primary`, `--primary-foreground`, `--destructive`, etc.) inside `@theme inline`.  
**Estimated Impact:** Silent rendering failures — major UI components appear invisible or broken.  
**Dependencies:** Requires CRIT-001 to be resolved first (we need one definitive `globals.css`).

---

### CRIT-003 — `@sagemodules/database` Not Referenced in `apps/web`

**Description:**  
`apps/web/package.json` does not list `@sagemodules/database` as a dependency. The two files that import Prisma directly (`osActions.ts`, `crmActions.ts`) use `import { PrismaClient } from '@prisma/client'` which will fail to resolve in the web app context since `@prisma/client` is only installed in `packages/database`.

**Affected Modules:** SAGE OS (Mod 050), CRM (Mod 026), and any future module with Server Actions  
**Root Cause:** The workspace package `@sagemodules/database` (which correctly exports the singleton Prisma client) was never added to the web app's `package.json`.  
**Recommended Fix:** Add to `apps/web/package.json`:
```json
"@sagemodules/database": "workspace:*",
"@sagemodules/core": "workspace:*",
"@sagemodules/ui": "workspace:*"
```
Then update Server Actions to `import { prisma } from '@sagemodules/database'` instead of `new PrismaClient()`.  
**Estimated Impact:** All Server Actions will throw module-not-found errors at runtime.  
**Dependencies:** CRIT-001 (must have a stable build first).

---

### CRIT-004 — `@sagemodules/auth` Package Incomplete

**Description:**  
`packages/auth/` now has `package.json` and `src/index.ts` + `src/config.ts`, but `next-auth` v5 is not installed in the workspace. Furthermore, `apps/web/middleware.ts` imports from `@sagemodules/auth` which is not listed in `apps/web/package.json`, causing immediate TypeScript and build failures.

**Affected Modules:** Authentication (Mod 002), all protected dashboard routes, middleware  
**Root Cause:** The auth package was created but not installed and not wired into the web app's dependency graph.  
**Recommended Fix:**  
1. Add `"@sagemodules/auth": "workspace:*"` to `apps/web/package.json`
2. Run `pnpm install` to resolve all workspace deps
3. Validate that `next-auth` v5 is available in the auth package  
**Estimated Impact:** Middleware (route protection) non-functional; all dashboard routes unprotected.  
**Dependencies:** Requires pnpm install.

---

### CRIT-005 — `tsconfig.json` Path Alias Misconfigured

**Description:**  
`apps/web/tsconfig.json` defines `"@/*": ["./src/*"]`, pointing all `@/` imports to `apps/web/src/`. However, all feature directories, components, store, and middleware files live directly under `apps/web/` (not under `apps/web/src/`). This means:
- `import { GlobalErrorBoundary } from '@/components/ui/error-boundary'` resolves to `apps/web/src/components/ui/error-boundary` → **file does not exist**
- `import { useAuthStore } from '@/store'` resolves to `apps/web/src/store` → **file does not exist**

**Affected Modules:** Every single module that uses `@/` imports (all 33 built routes and all feature components).  
**Root Cause:** The `create-next-app` scaffold generated the `src/` alias, but all production code was placed directly at the `apps/web/` root level.  
**Recommended Fix:** Change `tsconfig.json` paths to `"@/*": ["./*"]` — pointing to the web app root directly. This aligns with the actual file structure.  
**Estimated Impact:** TypeScript compiler reports every `@/` import as missing. Zero files compile.  
**Dependencies:** Must be fixed before any TypeScript check.

---

### CRIT-006 — No `app/layout.tsx` or Root Page in the Active App Directory

**Description:**  
The `apps/web/app/` directory (where all 50 module routes live) has no root `layout.tsx` or root `page.tsx`. Next.js App Router **requires** a `layout.tsx` at the root of the app directory. Without it, the build will fail with "Missing root layout" error.

The only existing `layout.tsx` is inside `apps/web/src/app/layout.tsx` — which is in the wrong directory (per CRIT-001).

**Affected Modules:** All 50 modules  
**Root Cause:** Directly caused by CRIT-001 (split app directory).  
**Recommended Fix:** Resolved as part of CRIT-001 fix — merging `src/app/` into `app/`.  
**Estimated Impact:** Build failure — Next.js refuses to compile without a root layout.  
**Dependencies:** CRIT-001.

---

### CRIT-007 — `apps/web/package.json` Missing Critical Runtime Dependencies

**Description:**  
The `apps/web/package.json` is the minimal scaffold from `create-next-app` and is missing every dependency required by the 50 enterprise modules:

Missing packages:
- `zod` (used by auth config, validators)
- `bullmq` (background workers)
- `ioredis` (Redis client)
- `@tanstack/react-query` (server state management)
- All workspace packages (`@sagemodules/*`)

**Affected Modules:** All 50 modules  
**Root Cause:** The monorepo was scaffolded but dependencies were never wired in the web app's `package.json`.  
**Recommended Fix:** Add all required dependencies and run `pnpm install`.  
**Estimated Impact:** Any import of these packages will throw `Cannot find module` at build time.  
**Dependencies:** None — first fix to execute.

---

## 🟠 HIGH ISSUES

---

### HIGH-001 — Duplicate/Split Global Zustand Store

**Description:**  
Two separate global store files exist in parallel:
- `apps/web/store/index.ts` — Contains 8 stores (`useAuthStore`, `useDashboardStore`, `useResearchStore`, `useContentStore`, etc.) as empty stubs or incomplete implementations
- `apps/web/features/operating-system/store/osStore.ts` — A second `useOsStore`
- `apps/web/features/crm/store/crmStore.ts` — A third isolated store

The global `store/index.ts` exports `useResearchStore` (empty), but `features/research/store/index.ts` exports a complete `useResearchDashboardStore`. These are two stores for the same concern.

**Affected Modules:** Dashboard (003), Research (005), CRM (026), SAGE OS (050)  
**Root Cause:** `store/index.ts` was created early as a monolithic scaffold, then individual feature stores were added later without removing or composing the global stubs.  
**Recommended Fix:** Remove stub stores from `apps/web/store/index.ts`. Keep `useAuthStore` and `useNotificationStore` as global cross-cutting stores. All feature-specific state belongs in `features/<module>/store/`.  
**Estimated Impact:** Duplicate state management causes stale data and confusing debugging.  
**Dependencies:** CRIT-005 (path alias fix first).

---

### HIGH-002 — Server Actions Import Prisma Directly (Violates Repository Pattern)

**Description:**  
`osActions.ts` and `crmActions.ts` both instantiate `new PrismaClient()` directly. This violates the established repository pattern and creates multiple Prisma client instances (hot-module reload hazard in development).

The correct pattern is: `import { prisma } from '@sagemodules/database'` which uses the singleton.

**Affected Modules:** SAGE OS (050), CRM (026)  
**Root Cause:** Files were authored before CRIT-003 was identified.  
**Recommended Fix:** Replace all `new PrismaClient()` with the singleton import from `@sagemodules/database`.  
**Estimated Impact:** Memory leaks and connection pool exhaustion in production under load.  
**Dependencies:** CRIT-003.

---

### HIGH-003 — No `error.tsx` or `not-found.tsx` at App Root

**Description:**  
The `apps/web/app/` directory has no global `error.tsx` or `not-found.tsx`. Next.js App Router uses these for unhandled route errors and 404s. Without them, users see a raw Next.js error screen in production.

**Affected Modules:** All routes  
**Root Cause:** Not created during module scaffolding.  
**Recommended Fix:** Create `apps/web/app/error.tsx` and `apps/web/app/not-found.tsx` with branded error UIs.  
**Estimated Impact:** Poor user experience on any error; no graceful 404 handling.  
**Dependencies:** CRIT-001.

---

### HIGH-004 — Dashboard Route Group Has No `loading.tsx` Files

**Description:**  
None of the 48 dashboard subroutes have `loading.tsx` files. Next.js uses these for automatic Suspense boundaries during server-side data fetching. Without them, the entire page is blank during data loading (causing flash of empty content).

**Affected Modules:** All dashboard modules  
**Root Cause:** Not generated during module scaffolding.  
**Recommended Fix:** Create `loading.tsx` files for each route group at minimum — `(dashboard)/loading.tsx` catches all subroutes.  
**Estimated Impact:** Poor perceived performance; blank screen during page transitions.  
**Dependencies:** CRIT-001.

---

### HIGH-005 — `auth-provider.tsx` Uses Client-Side Auth State (Security Risk)

**Description:**  
`apps/web/providers/auth-provider.tsx` syncs authentication state from a Zustand store on the client. This means the auth state can be manipulated via browser DevTools. Protected route access should rely entirely on the **server-side middleware** session check, not client-side Zustand state.

**Affected Modules:** Authentication (002), all protected routes  
**Root Cause:** Client-side auth state management pattern from early module scaffolding.  
**Recommended Fix:** `AuthProvider` should use `next-auth`'s `SessionProvider` and `useSession()` hook, with the Zustand `useAuthStore` only used for non-security UI state (e.g., display name, avatar). Route access decisions must happen in middleware.  
**Estimated Impact:** Security vulnerability — client-side auth state bypass possible.  
**Dependencies:** CRIT-004.

---

### HIGH-006 — `next.config.ts` Is an Empty Stub

**Description:**  
`apps/web/next.config.ts` contains no configuration. A production Next.js app requires at minimum:
- `transpilePackages` to compile workspace packages (`@sagemodules/*`)
- Security headers (CSP, HSTS, X-Frame-Options)  
- Image domain allowlist
- Environment variable validation

**Affected Modules:** All modules  
**Root Cause:** Not configured during scaffolding.  
**Recommended Fix:** Add `transpilePackages`, security headers, and image config.  
**Estimated Impact:** Workspace packages fail to compile; security headers missing from production.  
**Dependencies:** CRIT-003, CRIT-007.

---

### HIGH-007 — Modules 027–049 Have Zero Implementation Files

**Description:**  
All feature directories for Modules 027–049 (CXM, Finance, HRMS, IoT, ML, Globalization, Future Tech, GRC, Innovation, Ecosystem) are **empty scaffolded directories** — they contain no `index.ts`, `actions/index.ts`, `store/index.ts`, or `types/index.ts`. The dashboard routes for these modules exist but import from these empty locations.

**Affected Modules:** Modules 027–049 (23 modules)  
**Root Cause:** Phase 2 implementation was deferred — only Phase 1 scaffolding was completed.  
**Recommended Fix:** Create minimum viable `index.ts` stub files in each directory so TypeScript does not error on imports.  
**Estimated Impact:** TypeScript build fails on any route that imports from these modules.  
**Dependencies:** CRIT-005.

---

### HIGH-008 — `turbo.json` Uses Deprecated `pipeline` Key

**Description:**  
`turbo.json` uses `"pipeline"` which was deprecated in Turborepo v2. The correct key is `"tasks"`. This causes Turborepo to emit warnings and may break in future versions.

**Affected Modules:** DevOps / CI-CD pipeline  
**Root Cause:** Project was scaffolded with an older Turborepo template.  
**Recommended Fix:** Replace `"pipeline"` with `"tasks"` in `turbo.json`.  
**Estimated Impact:** Build warnings; forward compatibility broken with Turbo v3.  
**Dependencies:** None.

---

### HIGH-009 — `WorkspaceSidebar` Links Point to Non-Existent Routes

**Description:**  
`workspace-sidebar.tsx` contains hardcoded href values pointing to `/workspace/team`, `/workspace/roles`, `/workspace/branding`, etc. None of these subroutes have `page.tsx` files. Clicking them will return a 404 (or render blank if not-found.tsx is missing).

**Affected Modules:** Workspace (Mod 004)  
**Root Cause:** Sidebar was built with future route placeholders that were never created.  
**Recommended Fix:** Either create the missing route files or mark sidebar links as `aria-disabled` with a "Coming Soon" badge until routes are built.  
**Estimated Impact:** Navigation broken in workspace settings — every secondary link 404s.  
**Dependencies:** HIGH-003.
