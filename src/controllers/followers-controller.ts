import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import followersService from '../services/followers-service';

const postFollowers = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /followers'));
  const userId = res.locals.userId;
  const { followed } = req.body;
  try {
    await followersService.postFollowers(userId, followed);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const unfollow = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('DELETE /followers'));
  const userId = res.locals.userId;
  const { followed } = req.body;
  try {
    await followersService.unfollow(userId, followed);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default {
  postFollowers,
  unfollow
};
