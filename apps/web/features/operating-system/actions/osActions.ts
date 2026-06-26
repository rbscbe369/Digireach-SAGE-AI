'use server';

import { prisma } from '@sagemodules/database';

/**
 * Generates the organization health score by aggregating data across multiple modules.
 * Uses the shared prisma singleton from @sagemodules/database (repository pattern).
 *
 * NOTE: CrmDeal does not have an organizationId directly — it belongs to a pipeline
 * which belongs to an organization. We count via pipeline relation.
 */
export async function calculateOrganizationHealth(organizationId: string) {
  try {
    const [pipelines, employees, invoices] = await Promise.all([
      // Count deals through pipelines (which have organizationId)
      prisma.crmPipeline.count({ where: { organizationId } }),
      prisma.hrEmployee.count({ where: { organizationId } }),
      prisma.financeInvoice.count({ where: { organizationId } })
    ]);

    const healthScore = Math.min(100, 50 + (pipelines * 2) + (employees * 1) + (invoices * 2));

    const healthRecord = await prisma.osHealth.create({
      data: {
        organizationId,
        component: 'OVERALL',
        score: healthScore,
        metrics: { pipelines, employees, invoices }
      }
    });

    return { success: true, data: healthRecord };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[OS] Failed to calculate organization health:', message);
    return { success: false, error: message };
  }
}

/**
 * Runs a universal enterprise search.
 * Uses the shared prisma singleton from @sagemodules/database (repository pattern).
 */
export async function runEnterpriseSearch(
  organizationId: string,
  userId: string,
  query: string
) {
  try {
    const startTime = Date.now();

    // Phase 2: Full cross-module search will be implemented with vector embeddings.
    const results: Array<{ module: string; type: string; name: string }> = [];

    const searchRecord = await prisma.osSearch.create({
      data: {
        organizationId,
        userId,
        query,
        resultsCount: results.length,
        executionTimeMs: Date.now() - startTime
      }
    });

    return { success: true, data: { record: searchRecord, results } };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[OS] Failed to run enterprise search:', message);
    return { success: false, error: message };
  }
}

/**
 * Builds the timeline of recent enterprise events.
 */
export async function buildTimeline(organizationId: string) {
  try {
    const timelineEvents = await prisma.osTimeline.findMany({
      where: { organizationId },
      orderBy: { eventDate: 'desc' },
      take: 50
    });

    return { success: true, data: timelineEvents };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[OS] Failed to build timeline:', message);
    return { success: false, error: message };
  }
}
