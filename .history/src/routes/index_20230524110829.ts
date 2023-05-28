import { Router } from 'express';

import postRouter from './post-router';
import loginRouter from './login-route';
import userRouter from './user-route';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/auth', loginRouter);
routes.use('/post', postRouter);

export default routes;