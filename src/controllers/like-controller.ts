import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import likeService from '../services/like-service';

const likeDraw = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /likes/:drawId'));
  const userId = res.locals.userId;
  const drawId = parseInt(req.params.drawId);
  try {
    await likeService.likeDraw(userId, drawId);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const disLikeDraw = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('Delete /likes/:drawId/dislike'));
  const userId = res.locals.userId;
  const drawId = parseInt(req.params.drawId);
  try {
    await likeService.disLikeDraw(userId, drawId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default {
  likeDraw,
  disLikeDraw
};
