import prisma from '../configs/database.connection';

const likeDraw = async (userId: number, drawId: number) => {
  return prisma.likes.create({
    data: {
      user_id: userId,
      drawing_id: drawId
    }
  });
};

const findLikeByUserIdAndDrawId = async (userId: number, drawId: number) => {
  return await prisma.likes.findFirst({
    where: {
      drawing_id: drawId,
      user_id: userId
    }
  });
};

const disLikeDraw = async (id: number) => {
  return prisma.likes.delete({
    where: {
      id
    }
  });
};

export default {
  likeDraw,
  disLikeDraw,
  findLikeByUserIdAndDrawId
};
