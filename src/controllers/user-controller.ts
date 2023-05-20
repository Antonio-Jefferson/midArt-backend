import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import userService from '../services/user-service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /example'));
  const { name, email, password } = req.body;
  try {
    await userService.createUser({ name, email, password });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

export default {
  createUser
};
