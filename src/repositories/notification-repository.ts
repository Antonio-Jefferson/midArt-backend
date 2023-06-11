import { resultDataType } from '../@types/notification-types';
import prisma from '../configs/database.connection';

const postNotification = async (resultData: resultDataType) => {
  await prisma.notifications.createMany({
    data: resultData
  });
};

const findNotificationsByUser = async (userId: number) => {
  return await prisma.notifications.findMany({
    where: {
      user_id: userId
    }
  });
};

export default {
  postNotification,
  findNotificationsByUser
};
