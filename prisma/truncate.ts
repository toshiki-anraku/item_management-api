import { PrismaClient, PrismaPromise } from '@prisma/client';
const prisma = new PrismaClient();

const truncate = async () => {
  const transactions: PrismaPromise<any>[] = [];
  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`);

  const tablenames = await prisma.$queryRaw<
    Array<{ TABLE_NAME: string }>
  >`SELECT TABLE_NAME from information_schema.TABLES WHERE TABLE_SCHEMA = 'item_management';`;

  for (const { TABLE_NAME } of tablenames) {
    if (TABLE_NAME !== '_prisma_migrations') {
      try {
        transactions.push(prisma.$executeRawUnsafe(`TRUNCATE ${TABLE_NAME};`));
      } catch (error) {
        console.log({ error });
      }
    }
  }

  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`);

  try {
    await prisma.$transaction(transactions);

    console.log(`truncate has been successfully executed.`);
  } catch (error) {
    console.log({ error });
  }
};

truncate();
