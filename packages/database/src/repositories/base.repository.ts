import { prisma } from '../../index';

/**
 * Base Enterprise Repository Pattern
 * Enforces Soft Deletes, Multi-Tenancy, and Audit Logging
 */
export class BaseRepository<T extends { id: string; organizationId?: string; deletedAt?: Date | null }> {
  protected model: any;
  protected modelName: string;

  constructor(modelName: string) {
    this.modelName = modelName;
    // @ts-ignore - dynamic prisma model access
    this.model = prisma[modelName];
  }

  /**
   * Find by ID with optional tenant isolation
   */
  async findById(id: string, organizationId?: string): Promise<T | null> {
    const where: any = { id, deletedAt: null };
    if (organizationId) where.organizationId = organizationId;
    
    return this.model.findFirst({ where });
  }

  /**
   * Soft Delete an entity and log it
   */
  async softDelete(id: string, userId: string, organizationId?: string): Promise<T> {
    const data: any = { deletedAt: new Date(), updatedBy: userId };
    
    const result = await this.model.update({
      where: { id },
      data,
    });

    await prisma.auditLog.create({
      data: {
        action: 'SOFT_DELETE',
        entityId: id,
        entityType: this.modelName,
        userId,
        organizationId,
      }
    });

    return result;
  }
}
