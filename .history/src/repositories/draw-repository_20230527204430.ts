import prisma from '../configs/database.connection';

const create = async (data: dataType) => {
    return prisma.user_tokens.create({
      data
    });
  };