const findAllDraws = async () => {
    const draws = drawsRepository.findAllDraws();
};

export default {
  findAllDraws
}