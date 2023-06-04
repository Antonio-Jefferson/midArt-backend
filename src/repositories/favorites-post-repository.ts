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

export default {
  savePost
};
