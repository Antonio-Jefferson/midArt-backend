import { resultDataType } from '../@types/notification-types';
import prisma from '../configs/database.connection';

const postNotification = async (resultData: resultDataType) => {
  await prisma.notifications.createMany({
    data: resultData
  });
};

const findNotificationsByUser = async (userId: number) => {
  const notifications = await prisma.notifications.findMany({
    where: {
      user_id: userId
    },
    select: {
      id: true,
      user_id: true,
      group_id: true,
      notification_read: true,
      created_at: true,
      groups: {
        select: {
          group_name: true
        }
      }
    }
  });

  const formattedNotifications = notifications.map((notification) => {
    return {
      id: notification.id,
      user_id: notification.user_id,
      group_id: notification.group_id,
      group_name: notification.groups.group_name,
      notification_read: notification.notification_read,
      created_at: notification.created_at
    };
  });

  return formattedNotifications;
};

const notificationRead = async (userId: number) => {
  await prisma.notifications.updateMany({
    where: {
      user_id: userId
    },
    data: {
      notification_read: true
    }
  });
};

export default {
  postNotification,
  findNotificationsByUser,
  notificationRead
};
