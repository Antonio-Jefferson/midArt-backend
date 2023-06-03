import prisma from '../configs/database.connection';

const likeDraw = async (userId: number, drawId: number) => {
  return prisma.likes.create({
    data: {
      user_id: userId,
      drawing_id: drawId
    }
  });
};

export default {
  likeDraw
};
