import errors from '../erros';
import drawRepository from '../repositories/draw-repository';

const findAllDraws = async () => {
  const draws = await drawRepository.findAllDraws();
  return draws;
};

const findAllComments = async (drawId: number) => {
  const existDraw = await drawRepository.findDrawById(drawId);
  if (!existDraw) throw errors.notFoundError('draw');

  const comments = await drawRepository.findAllComments(drawId);
  return comments;
};

export default {
  findAllDraws,
  findAllComments
};
