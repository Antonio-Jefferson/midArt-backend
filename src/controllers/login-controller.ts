import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import authLoginService from '../services/auth-login-google-service';

const loginGoogle = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /login/google'));
  const { code } = req.query;

  try {
    await authLoginService.loginGoogle(code);
  } catch (err) {
    next(err);
  }
};

export default {
  loginGoogle
};
