import drawRepository from '../repositories/draw-repository';

const findAllDraws = async () => {
  const draws = drawRepository.findAllDraws();
  return draws;
};

export default {
  findAllDraws
};
