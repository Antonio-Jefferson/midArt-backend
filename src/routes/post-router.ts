import multer from 'multer';

import { Router } from 'express';

import multerConfig from '../configs/multer';
import postController from '../controllers/post-controller';
import tokenMiddleware from '../middlewares/token.middleware';

const postRouter = Router();

postRouter.post('/upload/draw', tokenMiddleware, multer(multerConfig).single('file'), postController.createPost);
postRouter.get('/feed', tokenMiddleware, postController.findAllDraws);
postRouter.get('/friends', tokenMiddleware, postController.findDrawingsFriends);
postRouter.get('/challenges', tokenMiddleware, postController.findDrawingsChallenges);
postRouter.delete('/:drawId', tokenMiddleware, postController.deletePost);

export default postRouter;
