'use server';

import { prisma } from '@sagemodules/database';

/**
 * Creates a new lead in the CRM.
 * Schema: CrmLead has (id, organizationId, firstName, lastName, email, phone, status, source, score)
 * Note: no ownerId or company field on CrmLead per schema — those are on CrmContact/CrmCompany.
 */
export async function createLead(
  organizationId: string,
  leadData: {
    firstName: string;
    lastName?: string;
    email?: string;
    phone?: string;
    source?: string;
  }
) {
  try {
    const lead = await prisma.crmLead.create({
      data: {
        organizationId,
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        email: leadData.email,
        phone: leadData.phone,
        status: 'NEW',
        source: leadData.source ?? 'ORGANIC'
      }
    });

    return { success: true, data: lead };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[CRM] Failed to create lead:', message);
    return { success: false, error: message };
  }
}

/**
 * Converts a lead to a company/deal.
 * Schema: CrmDeal has (id, pipelineId, stageId, leadId, companyId, name, value, status)
 * Note: There is no CrmCustomer in the schema — deals connect to CrmCompany.
 */
export async function convertLeadToDeal(
  organizationId: string,
  leadId: string,
  companyName: string
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const lead = await tx.crmLead.findUnique({ where: { id: leadId } });
      if (!lead) throw new Error('Lead not found');

      // 1. Find or create the company
      const company = await tx.crmCompany.create({
        data: {
          organizationId,
          name: companyName
        }
      });

      // 2. Find default pipeline for the organization
      const defaultPipeline = await tx.crmPipeline.findFirst({
        where: { organizationId },
        include: { stages: { orderBy: { orderIndex: 'asc' }, take: 1 } }
      });

      if (!defaultPipeline) {
        throw new Error(
          'No CRM pipeline found for this organization. Create a pipeline first.'
        );
      }

      const firstStage = defaultPipeline.stages[0];
      if (!firstStage) {
        throw new Error('Pipeline has no stages. Add stages to the pipeline first.');
      }

      // 3. Create deal linked to lead and company
      const deal = await tx.crmDeal.create({
        data: {
          pipelineId: defaultPipeline.id,
          stageId: firstStage.id,
          leadId: lead.id,
          companyId: company.id,
          name: `${companyName} — Initial Deal`,
          value: 0,
          status: 'OPEN'
        }
      });

      // 4. Mark lead as qualified
      await tx.crmLead.update({
        where: { id: leadId },
        data: { status: 'QUALIFIED' }
      });

      return { company, deal };
    });

    return { success: true, data: result };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[CRM] Failed to convert lead to deal:', message);
    return { success: false, error: message };
  }
}

/**
 * Loads the CRM Dashboard summary data.
 * Uses counts from CrmLead and CrmPipeline (no CrmCustomer or CrmDeal.organizationId in schema).
 */
export async function loadCrmDashboard(organizationId: string) {
  try {
    const [newLeads, qualifiedLeads, pipelines] = await Promise.all([
      prisma.crmLead.count({ where: { organizationId, status: 'NEW' } }),
      prisma.crmLead.count({ where: { organizationId, status: 'QUALIFIED' } }),
      prisma.crmPipeline.findMany({
        where: { organizationId },
        include: { _count: { select: { deals: true } } }
      })
    ]);

    const totalDeals = pipelines.reduce((sum, p) => sum + p._count.deals, 0);

    return {
      success: true,
      data: {
        newLeads,
        qualifiedLeads,
        totalPipelines: pipelines.length,
        totalDeals
      }
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[CRM] Failed to load dashboard:', message);
    return { success: false, error: message };
  }
}
