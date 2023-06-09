import prisma from '../src/configs/database.connection';

export async function cleanDb() {
  await prisma.users.deleteMany({});
}
