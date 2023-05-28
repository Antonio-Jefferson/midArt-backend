import prisma from '../configs/database.connection';

const create = async () => {
    return prisma.user_tokens.create({
      data
    });
  };