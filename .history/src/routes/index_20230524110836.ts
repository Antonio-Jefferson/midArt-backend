import { Router } from 'express';
import loginRouter from './login-route';
import postRouter from './post-router';
import userRouter from './user-route';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/auth', loginRouter);
routes.use('/post', postRouter);

export default routes;
