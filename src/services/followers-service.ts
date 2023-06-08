import erros from '../erros';
import followersRepository from '../repositories/followers-repository';

const postFollowers = async (userId: number, followed: number) => {
  const existFollowed = await followersRepository.findFollowed(followed);
  if (!existFollowed) throw erros.notFoundError('followed');

  if (existFollowed.id === userId) throw erros.BadRequestError();

  await followersRepository.postFollowers(userId, followed);
};

const unfollow = async (userId: number, followed: number) => {
  const existFollowed = await followersRepository.findFollowed(followed);
  if (!existFollowed) throw erros.notFoundError('followed');

  if (existFollowed.id === userId) throw erros.BadRequestError();

  const follower = await followersRepository.findFollowers(userId, followed);

  if (follower?.id == null) throw erros.notFoundError('error');

  await followersRepository.unfollow(follower.id);
};

export default {
  postFollowers,
  unfollow
};
