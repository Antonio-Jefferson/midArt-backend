import { Router } from 'express';

const likeRouter = Router();
import likeController from '../controllers/like-controller';
import tokenMiddleware from '../middlewares/token.middleware';

likeRouter.post('/:drawId', tokenMiddleware, likeController.likeDraw);

export default likeRouter;
