import prisma from '../configs/database.connection';

const findAllDraws = async () => {
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
           count: true
      },
    comments: {
        count: true
    },
    favorite_count: true
    }
});

return drawings.map((drawing) => ({
    id: drawing.id,
    user_id: drawing.user_id,
    username: drawing.users.username,
    image_user: drawing.users.profile_image,
    description: drawing.description,
    drawing_image: drawing.drawing_image,
    likes_count: drawing.likes.count,
    comments_count: drawing.comments.count,
    favorite_count: drawing.favorite_count,
    created_at: drawing.created_at.toISOString()
}));
};
  
export default {
  findAllDraws
};
