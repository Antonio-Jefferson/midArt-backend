import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import userService from '../services/user-service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signup'));
  const { name, email, password } = req.body;
  try {
    await userService.createUser({ name, email, password });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signin'));
  const { email, password } = req.body;
  try {
    const result = await userService.signIn({ email, password });
    res.status(200).send({ token: result });
  } catch (err) {
    next(err);
  }
};

export default {
  createUser,
  signIn
};
