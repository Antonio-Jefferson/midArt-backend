import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /signup'));
  try {
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};
