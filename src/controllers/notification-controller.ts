import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import notificationService from '../services/notification-service';

const postNotification = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /notification'));
  const { users, groupId } = req.body;
  try {
    await notificationService.postNotification(users, groupId);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

const findNotificationsByUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /notification'));
  const userId = res.locals.userId;
  try {
    const notifications = await notificationService.findNotificationsByUser(userId);
    res.status(200).send(notifications);
  } catch (error) {
    next(error);
  }
};

export default {
  postNotification,
  findNotificationsByUser
};
