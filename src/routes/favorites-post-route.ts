import { Router } from 'express';

const favoritesPostRoute = Router();

import favoritesPostsController from '../controllers/favorites-posts-controller';
import tokenMiddleware from '../middlewares/token.middleware';

favoritesPostRoute.post('/:drawId', tokenMiddleware, favoritesPostsController.savePost);

export default favoritesPostRoute;
