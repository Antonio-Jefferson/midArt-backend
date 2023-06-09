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

const findUserById = async (userId: number) => {
  const user = await prisma.users.findUnique({
    where: {
      id: userId
    },
    select: {
      id: true,
      username: true,
      profile_image: true,
      cover_image: true,
      followers_followers_followed_user_idTousers: {
        select: {
          id: true
        }
      },
      followers_followers_follower_user_idTousers: {
        select: {
          id: true
        }
      },
      drawings: {
        select: {
          id: true
        }
      },
      likes: {
        select: {
          id: true
        }
      }
    }
  });

  const response = {
    id: user?.id,
    name: user?.username,
    image: user?.profile_image,
    cover_image: user?.cover_image,
    followers_count: user?.followers_followers_followed_user_idTousers.length,
    following_count: user?.followers_followers_follower_user_idTousers.length,
    total_likes: user?.likes.length,
    total_posts: user?.drawings.length
  };

  return response;
};

export default {
  createUser,
  findByUserEmail,
  findUsersFriends,
  findSearchUser,
  findUsersFamous,
  findUserById
};
