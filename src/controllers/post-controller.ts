import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import drawService from '../services/draw-service';

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

const findAllDraws = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const draws = await drawService.findAllDraws();
    res.send(draws);
  } catch (err) {
    next(err);
  }
};

export default {
  createPost,
  findAllDraws
};
