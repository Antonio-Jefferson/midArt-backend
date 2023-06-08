import { DrawingType } from '../@types';
import prisma from '../configs/database.connection';

const findAllDraws = async (): Promise<DrawingType[]> => {
  const drawings = await prisma.drawings.findMany({
    select: {
      id: true,
      user_id: true,
      users: {
        select: {
          username: true,
          profile_image: true
        }
      },
      description: true,
      drawing_image: true,
      created_at: true,
      likes: {
        select: {
          id: true
        }
      },
      comments: {
        select: {
          id: true
        }
      },
      saved_posts: {
        select: {
          id: true
        }
      }
    }
  });

  return drawings.map((drawing) => ({
    id: drawing.id,
    user_id: drawing.user_id,
    username: drawing.users.username,
    user_image: drawing.users.profile_image,
    description: drawing.description,
    drawing_image: drawing.drawing_image,
    likes_count: drawing.likes.length,
    comments_count: drawing.comments.length,
    saved_posts_count: drawing.saved_posts.length,
    created_at: drawing.created_at.toISOString()
  }));
};

const findDrawById = async (drawId: number) => {
  return await prisma.drawings.findFirst({
    where: {
      id: drawId
    }
  });
};

const findDrawingsFriends = async (userId: number) => {
  const followingUserIds = await prisma.followers
    .findMany({
      where: { follower_user_id: userId },
      select: { followed_user_id: true }
    })
    .then((followers) => followers.map((follower) => follower.followed_user_id));

  const drawings = await prisma.drawings.findMany({
    where: { user_id: { in: followingUserIds } },
    select: {
      id: true,
      user_id: true,
      users: {
        select: {
          username: true,
          profile_image: true
        }
      },
      description: true,
      drawing_image: true,
      created_at: true,
      likes: {
        select: {
          id: true
        }
      },
      comments: {
        select: {
          id: true
        }
      },
      saved_posts: {
        select: {
          id: true
        }
      }
    }
  });

  return drawings.map((drawing) => ({
    id: drawing.id,
    user_id: drawing.user_id,
    username: drawing.users.username,
    image_user: drawing.users.profile_image,
    description: drawing.description,
    drawing_image: drawing.drawing_image,
    likes_count: drawing.likes.length,
    comments_count: drawing.comments.length,
    saved_posts_count: drawing.saved_posts.length,
    created_at: drawing.created_at.toISOString()
  }));
};

export default {
  findAllDraws,
  findDrawById,
  findDrawingsFriends
};
