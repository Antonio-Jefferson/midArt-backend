import { Router } from 'express';

import followersController from '../controllers/followers-controller';
import tokenMiddleware from '../middlewares/token.middleware';

const followersRoute = Router();

followersRoute.post('/', tokenMiddleware, followersController.postFollowers);
followersRoute.delete('/', tokenMiddleware, followersController.unfollow);

export default followersRoute;
