import { userProps } from '../@types';
import prisma from '../configs/database.connection';

const createUser = async ({ username, email, password }: userProps) => {
  return await prisma.users.create({
    data: {
      username,
      email,
      password,
      profile_image: 'https://www.prosesc.org.br/files/depoimentos/1586969992913_perfilsemfoto.jpg',
      cover_image: 'https://optclean.com.br/wp-content/uploads/2016/11/capa-para-facebook99.jpg'
    }
  });
};

const findByUserEmail = async (email: string) => {
  return await prisma.users.findUnique({
    where: {
      email: email
    }
  });
};

const findUsersFriends = async (userId: number) => {
  const usersFriends = await prisma.followers.findMany({
    where: {
      followed_user_id: userId
    },
    include: {
      users_followers_follower_user_idTousers: {
        select: {
          username: true,
          profile_image: true
        }
      }
    }
  });

  const friends = usersFriends.map((user) => ({
    name: user.users_followers_follower_user_idTousers.username,
    image: user.users_followers_follower_user_idTousers.profile_image
  }));

  return friends;
};

const findSearchUser = async (user: string) => {
  const users = await prisma.users.findMany({
    where: {
      username: {
        startsWith: user,
        mode: 'insensitive'
      }
    },
    select: {
      id: true,
      username: true,
      profile_image: true
    }
  });

  return users;
};

const findUsersFamous = async () => {
  const users = await prisma.users.findMany({
    orderBy: {
      followers_followers_followed_user_idTousers: {
        _count: 'desc'
      }
    },
    select: {
      id: true,
      username: true,
      profile_image: true
    },
    take: 10
  });

  return users;
};

export default {
  createUser,
  findByUserEmail,
  findUsersFriends,
  findSearchUser,
  findUsersFamous
};
