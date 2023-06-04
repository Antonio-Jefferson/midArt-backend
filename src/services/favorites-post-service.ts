import erros from '../erros';
import drawRepository from '../repositories/draw-repository';
import favoritesPostRepository from '../repositories/favorites-post-repository';

const savePost = async (user_id: number, drawing_id: number) => {
  const existDraw = await drawRepository.findDrawById(drawing_id);
  if (!existDraw) throw erros.notFoundError;

  await favoritesPostRepository.savePost({ user_id, drawing_id });
};

export default {
  savePost
};
