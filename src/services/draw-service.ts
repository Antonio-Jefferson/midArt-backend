import erros from '../erros';
import drawRepository from '../repositories/draw-repository';

const findAllDraws = async () => {
  const draws = await drawRepository.findAllDraws();
  return draws;
};

const findDrawingsFriends = async (userId: number) => {
  return await drawRepository.findDrawingsFriends(userId);
};

const findDrawingsChallenges = async () => {
  const drawingsChallenges = await drawRepository.findDrawingsChallenges();
  if (!drawingsChallenges) throw erros.notFoundError('drawings challenges');

  return drawingsChallenges;
};

export default {
  findAllDraws,
  findDrawingsFriends,
  findDrawingsChallenges
};
