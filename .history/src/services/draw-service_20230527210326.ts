import dr
const findAllDraws = async () => {
  const draws = drawsRepository.findAllDraws();
  return draws;
};

export default {
  findAllDraws
};