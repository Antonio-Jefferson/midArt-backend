import notificationRepository from '../repositories/notification-repository';

const gereneteData = (users: number[], groupId: number) => {
  const notificationsData = users.map((user) => {
    return {
      user_id: user,
      group_id: groupId
    };
  });

  return notificationsData;
};

const postNotification = async (users: number[], groupId: number) => {
  const resultData = await gereneteData(users, groupId);
  await notificationRepository.postNotification(resultData);
};

const findNotificationsByUser = async (userId: number) => {
  return await notificationRepository.findNotificationsByUser(userId);
};

const notificationRead = async (userId: number) => {
  await notificationRepository.notificationRead(userId);
};

export default {
  postNotification,
  findNotificationsByUser,
  notificationRead
};
