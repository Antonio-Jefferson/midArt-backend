import prisma from '../configs/database.connection';

const createComment = async (drawId: number, userId: number, text: string) => {
  return await prisma.comments.create({
    data: {
      user_id: userId,
      drawing_id: drawId,
      comment_text: text
    }
  });
};

const findAllComments = async (drawId: number) => {
  return await prisma.comments
    .findMany({
      where: {
        drawing_id: drawId
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            profile_image: true
          }
        }
      }
    })
    .then((comments) => {
      return comments.map((comment) => ({
        id: comment.id,
        user_id: comment.user_id,
        drawing_id: comment.drawing_id,
        username: comment.users.username,
        image_user: comment.users.profile_image,
        comment_text: comment.comment_text,
        created_at: comment.created_at
      }));
    });
};

export default {
  createComment,
  findAllComments
};
