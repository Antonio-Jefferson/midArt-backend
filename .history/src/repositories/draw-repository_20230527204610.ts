import prisma from '../configs/database.connection';

const findAllDraws = async () => {
  return prisma.drawings.findMoney();
};

export default {
  findAllDraws
};
