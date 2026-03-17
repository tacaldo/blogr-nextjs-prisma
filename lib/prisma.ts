import { PrismaClient } from '@prisma/client';

const createPrismaClient = () => {
  const accelerateUrl = process.env.POSTGRES_PRISMA_URL;

  if (!accelerateUrl) {
    throw new Error('POSTGRES_PRISMA_URL is required to initialize PrismaClient.');
  }

  return new PrismaClient({
    accelerateUrl,
  });
};

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
