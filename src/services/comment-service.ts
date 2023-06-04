import erros from '../erros';
import commentRepository from '../repositories/comment-repository';
import drawRepository from '../repositories/draw-repository';

const createComment = async (drawId: number, userId: number, text: string) => {
  const existDraw = await drawRepository.findDrawById(drawId);
  if (!existDraw) throw erros.notFoundError('drawing');

  return await commentRepository.createComment(drawId, userId, text);
};

const findAllComments = async (drawId: number) => {
  const existDraw = await drawRepository.findDrawById(drawId);
  if (!existDraw) throw erros.notFoundError('drawing');

  const comments = await commentRepository.findAllComments(drawId);
  console.log(comments);
  return comments;
};

export default {
  createComment,
  findAllComments
};
