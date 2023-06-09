import chalk from 'chalk';
import { z } from 'zod';

import { Request, Response, NextFunction } from 'express';

import userSchema from '../schemas/user-schema';
import userService from '../services/user-service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signup'));
  const { username, email, password } = req.body as z.infer<typeof userSchema.register>;
  try {
    await userService.createUser({ username, email, password });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signin'));
  const { email, password } = req.body as z.infer<typeof userSchema.login>;
  try {
    const result = await userService.signIn({ email, password });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const findUsersFriends = async (req: Request, res: Response, next: NextFunction) => {
  const userId = res.locals.userId;
  try {
    const usersFriends = await userService.findUsersFriends(userId);
    res.status(200).send(usersFriends);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  signIn,
  findUsersFriends
};
