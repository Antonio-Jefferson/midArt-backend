import erros from '../erros';
import drawRepository from '../repositories/draw-repository';
import favoritesPostRepository from '../repositories/favorites-post-repository';

const savePost = async (user_id: number, drawing_id: number) => {
  const existDraw = await drawRepository.findDrawById(drawing_id);
  if (!existDraw) throw erros.notFoundError;

  await favoritesPostRepository.savePost({ user_id, drawing_id });
};

const deletefavoritePost = async (user_id: number, drawing_id: number) => {
  const existDraw = await drawRepository.findDrawById(drawing_id);
  if (!existDraw) throw erros.notFoundError;

  const existSavePost = await favoritesPostRepository.findSavePostByUserId({ user_id, drawing_id });
  if (!existSavePost) throw erros.notFoundError;

  await favoritesPostRepository.deletefavoritePost(existSavePost.id);
};

export default {
  savePost,
  deletefavoritePost
};
