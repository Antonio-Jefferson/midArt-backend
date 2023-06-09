import { Router } from 'express';

const notificationRouter = Router();

import notificationController from '../controllers/notification-controller';
import tokenMiddleware from '../middlewares/token.middleware';

notificationRouter.post('/', tokenMiddleware, notificationController.postNotification);
notificationRouter.get('/', tokenMiddleware, notificationController.findNotificationsByUser);
notificationRouter.put('/', tokenMiddleware, notificationController.notificationRead);

export default notificationRouter;
