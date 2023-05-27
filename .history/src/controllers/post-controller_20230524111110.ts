import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /'));
  try {
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

export default {
  createPost
};
