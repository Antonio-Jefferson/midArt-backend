import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

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
  try
};

export default {
  createPost,
  findAllDraws
};
