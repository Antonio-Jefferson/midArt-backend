import { Router } from 'express';

import userController from '../controllers/user-controller';
import tokenMiddleware from '../middlewares/token.middleware';
const userRouter = Router();

userRouter.post('/signup', userController.createUser);
userRouter.post('/signin', userController.signIn);
userRouter.get('/friends', tokenMiddleware, userController.findUsersFriends);

export default userRouter;
