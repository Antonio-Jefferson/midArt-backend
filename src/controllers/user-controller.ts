import chalk from 'chalk';
import { z } from 'zod';

import { Request, Response, NextFunction } from 'express';

import userSchema from '../schemas/user-schema';
import userService from '../services/user-service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signup'));
  const { username, email, password } = req.body as z.infer<typeof userSchema.register>;
  try {
    await userService.createUser({ username, email, password });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signin'));
  const { email, password } = req.body as z.infer<typeof userSchema.login>;
  try {
    const result = await userService.signIn({ email, password });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const findUsersFriends = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /users/friends'));
  const userId = res.locals.userId;
  try {
    const usersFriends = await userService.findUsersFriends(userId);
    res.status(200).send(usersFriends);
  } catch (error) {
    next(error);
  }
};

const findSearchUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /users/search'));
  const { username } = req.query as { username: string };
  try {
    const usersSearch = await userService.findSearchUser(username);
    res.status(200).send(usersSearch);
  } catch (error) {
    next(error);
  }
};

const findUsersFamous = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /users/famous'));
  try {
    const usersFamous = await userService.findUsersFamous();
    res.status(200).send(usersFamous);
  } catch (error) {
    next(error);
  }
};

const findUserById = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /users/:userId'));
  const id = req.params.userId;
  const userId = parseInt(id);
  try {
    const user = await userService.findUserById(userId);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  signIn,
  findUsersFriends,
  findSearchUser,
  findUsersFamous,
  findUserById
};
