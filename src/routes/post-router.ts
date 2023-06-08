import multer from 'multer';

import { Router } from 'express';

import multerConfig from '../configs/multer';
import postController from '../controllers/post-controller';
import tokenMiddleware from '../middlewares/token.middleware';

const postRouter = Router();

postRouter.post('/upload/draw', multer(multerConfig).single('image'), postController.createPost);
postRouter.get('/feed', postController.findAllDraws);
postRouter.get('/friends', tokenMiddleware, postController.findDrawingsFriends);
postRouter.get('/challenges', tokenMiddleware, postController.findDrawingsChallenges);

export default postRouter;
