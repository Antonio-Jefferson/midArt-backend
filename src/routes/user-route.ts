import { Router } from 'express';

import userController from '../controllers/user-controller';
import tokenMiddleware from '../middlewares/token.middleware';
const userRouter = Router();

userRouter.post('/signup', userController.createUser);
userRouter.post('/signin', userController.signIn);
userRouter.get('/friends', tokenMiddleware, userController.findUsersFriends);
userRouter.get('/search', tokenMiddleware, userController.findSearchUser);
userRouter.get('/famous', userController.findUsersFamous);
userRouter.get('/:userId', tokenMiddleware, userController.findUserById);

export default userRouter;
