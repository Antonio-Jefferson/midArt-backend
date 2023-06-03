import { Router } from 'express';

import likeRouter from './likes-route';
import loginRouter from './login-route';
import postRouter from './post-router';
import userRouter from './user-route';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', loginRouter);
routes.use('/post', postRouter);
routes.use('/likes', likeRouter);

export default routes;
