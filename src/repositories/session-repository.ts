import prisma from '../configs/database.connection';

type dataType = {
  token: string;
  user_id: number;
};

const create = async (data: dataType) => {
  return prisma.user_tokens.create({
    data
  });
};

export default {
  create
};
