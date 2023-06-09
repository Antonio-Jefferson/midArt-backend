import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

import { userProps, userPropsWithoutName } from '../@types';
import errors from '../erros';
import sessionRepository from '../repositories/session-repository';
import userRepository from '../repositories/user-repository';

const createUser = async ({ username, email, password }: userProps) => {
  const existUser = await userRepository.findByUserEmail(email);
  if (existUser) throw errors.duplicatedError();

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepository.createUser({ username, email, password: hashedPassword });
};

const signIn = async ({ email, password }: userPropsWithoutName) => {
  if (password === null) throw errors.invalidCredentialsError();

  const existUser = await userRepository.findByUserEmail(email);

  if (!existUser) throw errors.invalidCredentialsError();

  await validatePassword(password, existUser.password!);

  const token = await createSession(existUser.id);

  const infUser = {
    userId: existUser.id,
    username: existUser.username,
    userImage: existUser.profile_image,
    token
  };
  return infUser;
};

const validatePassword = async (isPassword: string, password: string) => {
  const isPasswordValid = await bcrypt.compare(isPassword, password);
  if (!isPasswordValid) throw errors.invalidCredentialsError();
};

const createSession = async (user_id: number) => {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET!);
  await sessionRepository.create({ token, user_id });

  return token;
};

const findUsersFriends = async (userId: number) => {
  return await userRepository.findUsersFriends(userId);
};

export default {
  createUser,
  signIn,
  findUsersFriends
};
