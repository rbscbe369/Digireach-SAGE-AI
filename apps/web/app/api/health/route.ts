import { NextResponse } from 'next/server';
import { prisma } from '@sagemodules/database';

export const dynamic = 'force-dynamic';

export async function GET() {
  const timestamp = new Date().toISOString();
  const checks: Record<string, any> = {
    database: 'UP',
  };
  let status = 200;

  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (error: any) {
    checks.database = 'DOWN';
    checks.databaseError = error.message || error;
    status = 500;
  }

  if (process.env.REDIS_URL) {
    try {
      const { Redis } = await import('ioredis');
      const redis = new Redis(process.env.REDIS_URL, { maxRetriesPerRequest: 1 });
      await redis.ping();
      checks.redis = 'UP';
      await redis.quit();
    } catch (error: any) {
      checks.redis = 'DOWN';
      checks.redisError = error.message || error;
      status = 500;
    }
  } else {
    checks.redis = 'SKIPPED (REDIS_URL not set)';
  }

  return NextResponse.json(
    {
      status: status === 200 ? 'healthy' : 'unhealthy',
      timestamp,
      checks,
    },
    { status }
  );
}
