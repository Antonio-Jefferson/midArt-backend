import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signup'));
  const { name, email, password } = req.body;
  try {
    await userService.createUser({ name, email, password });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};
