import chalk from 'chalk';
import { z } from 'zod';

import { Request, Response, NextFunction } from 'express';

import userSchema from '../schemas/user-schema';
import userService from '../services/user-service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signup'));
  const { username, email, password } = req.body as z.infer<typeof userSchema.register>;
  console.log({ username, email, password });
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

export default {
  createUser,
  signIn
};
