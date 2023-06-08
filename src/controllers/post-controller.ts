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
  console.log(chalk.cyan('GET /drawings'));
  try {
    const draws = await drawService.findAllDraws();
    res.send(draws);
  } catch (err) {
    next(err);
  }
};

const findDrawingsFriends = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /drawings'));
  const userId = res.locals.userId;
  try {
    const drawings = await drawService.findDrawingsFriends(userId);
    res.status(200).send(drawings);
  } catch (error) {
    next(error);
  }
};

export default {
  createPost,
  findAllDraws,
  findDrawingsFriends
};
