import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import drawService from '../services/draw-service';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /post/upload/draw'));
  const { description } = req.body;

  const post = {
    description
  };

  console.log(post);
  console.log(req.file);

  try {
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const findAllDraws = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /drawings'));
  const userId = res.locals.userId;
  console.log(userId);
  try {
    const draws = await drawService.findAllDraws();
    res.status(200).send(draws);
  } catch (err) {
    next(err);
  }
};

const findDrawingsFriends = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /drawings/friends'));
  const userId = res.locals.userId;
  try {
    const drawings = await drawService.findDrawingsFriends(userId);
    res.status(200).send(drawings);
  } catch (error) {
    next(error);
  }
};

const findDrawingsChallenges = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /drawings/challenges'));
  try {
    const drawingsChallenges = await drawService.findDrawingsChallenges();
    res.status(200).send(drawingsChallenges);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('DELETE /drawings/:drawId'));
  const userId = res.locals.userId;
  const id = req.params.drawId;
  const drawId = parseInt(id);
  try {
    await drawService.deletePost(userId, drawId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default {
  createPost,
  findAllDraws,
  findDrawingsFriends,
  findDrawingsChallenges,
  deletePost
};
