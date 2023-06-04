import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import favoritesPostService from '../services/favorites-post-service';

const savePost = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /favorites/:drawId'));
  const userId = res.locals.userId;
  const drawId = parseInt(req.params.drawId);

  try {
    await favoritesPostService.savePost(userId, drawId);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

const deletFavorite = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /favorites/delete/:drawId'));
  const userId = res.locals.userId;
  const drawId = parseInt(req.params.drawId);
  console.log({ userId, drawId });
  try {
    await favoritesPostService.deletefavoritePost(userId, drawId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default {
  savePost,
  deletFavorite
};
