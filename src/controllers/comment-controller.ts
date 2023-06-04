import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import commentService from '../services/comment-service';

const createComment = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /comment'));
  const userId = res.locals.userId;
  const { drawId, text } = req.body;
  console.log({ drawId, userId });
  try {
    await commentService.createComment(Number(drawId), userId, text);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

const findAllComments = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /comment/:drawId'));
  const drawId = req.params.drawId;
  try {
    const comments = await commentService.findAllComments(parseInt(drawId));
    res.send(comments);
  } catch (err) {
    next(err);
  }
};

export default {
  createComment,
  findAllComments
};
