import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('[Seed] Starting database seed...');

  // 1. Create default Organization
  const org = await prisma.organization.upsert({
    where: { slug: 'digireach' },
    update: {},
    create: {
      name: 'Digireach Enterprise',
      slug: 'digireach',
    },
  });
  console.log(`[Seed] Created/Found Organization: ${org.name} (${org.id})`);

  // 2. Create default Role
  // Find or create default roles
  let role = await prisma.role.findFirst({
    where: { name: 'ADMIN' },
  });

  if (!role) {
    role = await prisma.role.create({
      data: {
        name: 'ADMIN',
        description: 'Administrator role with full access',
      },
    });
  }
  console.log(`[Seed] Created/Found Role: ${role.name} (${role.id})`);

  // 3. Create default User
  const user = await prisma.user.upsert({
    where: { email: 'admin@digireach.ai' },
    update: {},
    create: {
      email: 'admin@digireach.ai',
      name: 'Admin User',
      emailVerified: new Date(),
    },
  });
  console.log(`[Seed] Created/Found User: ${user.email} (${user.id})`);

  // 4. Create Organization Member link (RBAC & Multi-tenant)
  const membership = await prisma.organizationMember.upsert({
    where: {
      userId_organizationId: {
        userId: user.id,
        organizationId: org.id,
      },
    },
    update: {
      roleId: role.id,
    },
    create: {
      organizationId: org.id,
      userId: user.id,
      roleId: role.id,
      status: 'ACTIVE',
    },
  });
  console.log(`[Seed] Created/Found Membership ID: ${membership.id}`);

  // 5. Create credentials account (stores the password hash/access token)
  await prisma.oAuthAccount.upsert({
    where: {
      provider_providerAccountId: {
        provider: 'credentials',
        providerAccountId: user.email,
      },
    },
    update: {
      accessToken: 'pass1234', // In a production system, this would be a bcrypt hash.
    },
    create: {
      userId: user.id,
      provider: 'credentials',
      providerAccountId: user.email,
      accessToken: 'pass1234',
    },
  });
  console.log(`[Seed] Created credentials account for user with password 'pass1234'`);

  console.log('[Seed] Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('[Seed] Seeding failed with error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
