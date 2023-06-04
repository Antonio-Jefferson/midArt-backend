import prisma from '../configs/database.connection';

type dataType = {
  user_id: number;
  drawing_id: number;
};

const savePost = async (data: dataType) => {
  await prisma.saved_posts.create({
    data
  });
};

const findSavePostByUserId = async (data: dataType) => {
  return await prisma.saved_posts.findFirst({
    where: {
      drawing_id: data.drawing_id,
      user_id: data.user_id
    }
  });
};

const deletefavoritePost = async (id: number) => {
  await prisma.saved_posts.delete({
    where: {
      id
    }
  });
};

export default {
  savePost,
  findSavePostByUserId,
  deletefavoritePost
};
