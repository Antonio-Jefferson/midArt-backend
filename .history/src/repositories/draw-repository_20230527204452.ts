import prisma from '../configs/database.connection';

const create = async () => {
    return prisma..create({
      data
    });
  };