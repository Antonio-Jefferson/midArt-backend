import { Router } from 'express';

const groupRouter = Router();

import groupController from '../controllers/group-controller';
import tokenMiddleware from '../middlewares/token.middleware';

groupRouter.post('/', tokenMiddleware, groupController.createGroupe);
groupRouter.get('/', tokenMiddleware, groupController.findAllGroups);
groupRouter.post('/messages/:groupId', tokenMiddleware, groupController.postMessage);
groupRouter.get('/messages/:groupId', tokenMiddleware, groupController.findAllMessagesGroup);

export default groupRouter;
