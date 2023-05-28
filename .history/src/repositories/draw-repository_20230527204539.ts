import prisma from '../configs/database.connection';

const findAll = async () => {
    return prisma.drawings.findMoney()
  };