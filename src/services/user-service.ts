import bcrypt from 'bcrypt';

import { userProps } from '../@types';
import erros from '../erros';
import userRepository from '../repositories/user-repository';

const createUser = async ({ name, email, password }: userProps) => {
  const existUser = await userRepository.findByUserEmail(email);
  if (existUser) throw erros.duplicatedError();

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepository.createUser({ name, email, password: hashedPassword });
};

export default {
  createUser
};
