import erros from '../erros';
import drawRepository from '../repositories/draw-repository';
import likeRepository from '../repositories/like-repository';

const likeDraw = async (userId: number, drawId: number) => {
  const existDraw = await drawRepository.findDrawById(drawId);
  if (!existDraw) throw erros.notFoundError('drawing');

  return await likeRepository.likeDraw(userId, drawId);
};

const disLikeDraw = async (userId: number, drawId: number) => {
  const existDraw = await drawRepository.findDrawById(drawId);
  if (!existDraw) throw erros.notFoundError('drawing');

  const existLike = await likeRepository.findLikeByUserIdAndDrawId(userId, drawId);
  if (!existLike) throw erros.notFoundError('like');

  return await likeRepository.disLikeDraw(existLike.id);
};

export default {
  likeDraw,
  disLikeDraw
};
