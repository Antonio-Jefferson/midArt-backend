import erros from '../erros';
import drawRepository from '../repositories/draw-repository';
import likeRepository from '../repositories/like-repository';

const likeDraw = async (userId: number, drawId: number) => {
  const existDraw = await drawRepository.findDrawById(drawId);
  if (!existDraw) throw erros.notFoundError('drawing');

  return await likeRepository.likeDraw(userId, drawId);
};

export default {
  likeDraw
};
