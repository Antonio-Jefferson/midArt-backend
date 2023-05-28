import drawRepository from "../repositories/draw-repository";
const findAllDraws = async () => {
  const draws = drawsRepository.findAllDraws();
  return draws;
};

export default {
  findAllDraws
};
