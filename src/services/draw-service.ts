import drawRepository from '../repositories/draw-repository';

const findAllDraws = async () => {
  const draws = await drawRepository.findAllDraws();
  return draws;
};

export default {
  findAllDraws
};
