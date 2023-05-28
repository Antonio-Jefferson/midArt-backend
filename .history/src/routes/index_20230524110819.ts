import { Router } from 'express';

import loginRouter from './login-route';
import userRouter from './user-route';
import 
const routes = Router();

routes.use('/user', userRouter);
routes.use('/auth', loginRouter);
routes.use('/post', postRouter);

export default routes;