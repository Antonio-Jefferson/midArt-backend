import jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';

import erros from '../erros';
import 'dotenv/config';

export type JWTPayload = {
  user_id: number;
};

const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token = authorization?.split(' ')[1]?.trim();
  if (!token) throw erros.unauthorizedError();

  try {
    const { user_id } = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
    res.locals.userId = user_id;
  } catch {
    throw erros.unauthorizedError();
  }

  next();
};

export default tokenMiddleware;
