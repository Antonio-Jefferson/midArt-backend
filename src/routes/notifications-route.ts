import { Router } from 'express';

const notificationRouter = Router();

import notificationController from '../controllers/notification-controller';

notificationRouter.post('/', notificationController.postNotification);

export default notificationRouter;
