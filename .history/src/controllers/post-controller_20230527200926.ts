import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';
import { nextTick } from 'process';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /post/upload/draw'));

  console.log(req.body);
  console.log(req.file);

  try {
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const findAllDraws = async () => {
  try {

  } catch (err) {
    nextTick(errr)
  }
};

export default {
  createPost,
  findAllDraws
};
