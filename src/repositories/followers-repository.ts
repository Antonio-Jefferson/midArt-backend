import prisma from '../configs/database.connection';

const postFollowers = async (userId: number, followed: number) => {
  await prisma.followers.create({
    data: {
      follower_user_id: userId,
      followed_user_id: followed
    }
  });
};

const findFollowed = async (id: number) => {
  return await prisma.users.findUnique({
    where: {
      id
    }
  });
};

const findFollowers = async (userId: number, followed: number) => {
  return await prisma.followers.findFirst({
    where: {
      followed_user_id: followed,
      follower_user_id: userId
    }
  });
};

const unfollow = async (id: number) => {
  await prisma.followers.delete({
    where: {
      id
    }
  });
};

export default {
  postFollowers,
  findFollowed,
  unfollow,
  findFollowers
};
