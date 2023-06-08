import drawRepository from '../repositories/draw-repository';

const findAllDraws = async () => {
  const draws = await drawRepository.findAllDraws();
  return draws;
};

const findDrawingsFriends = async (userId: number) => {
  return await drawRepository.findDrawingsFriends(userId);
};

export default {
  findAllDraws,
  findDrawingsFriends
};
