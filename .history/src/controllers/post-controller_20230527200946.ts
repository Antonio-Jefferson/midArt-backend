import chalk from 'chalk';

import { Request, Response, NextFunction } from 'exp
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
    next(errr)
  }
};

export default {
  createPost,
  findAllDraws
};
