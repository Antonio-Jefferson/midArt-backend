import { Router } from 'express';

const commentRouter = Router();
import commentController from '../controllers/comment-controller';
import tokenMiddleware from '../middlewares/token.middleware';

commentRouter.post('/', tokenMiddleware, commentController.createComment);
commentRouter.get('/:drawId', commentController.findAllComments);

export default commentRouter;
