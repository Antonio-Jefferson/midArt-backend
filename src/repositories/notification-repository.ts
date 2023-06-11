import { resultDataType } from '../@types/notification-types';
import prisma from '../configs/database.connection';

const postNotification = async (resultData: resultDataType) => {
  await prisma.notifications.createMany({
    data: resultData
  });
};

export default {
  postNotification
};
