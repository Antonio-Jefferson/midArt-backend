import { groupData, messageData } from '../@types';
import prisma from '../configs/database.connection';

const createGroup = async (data: groupData) => {
  await prisma.groups.create({
    data: {
      user_admin: data.userId,
      group_name: data.name,
      group_image: data.image,
      group_description: data.description
    }
  });
};

const findAllGoups = async (userId: number) => {
  return await prisma.groups.findMany({
    where: {
      user_admin: userId
    },
    select: {
      id: true,
      group_image: true,
      group_name: true
    }
  });
};

const findByGroupId = async (id: number) => {
  return await prisma.groups.findUnique({
    where: {
      id
    }
  });
};

const postMessage = async (data: messageData) => {
  await prisma.messages.create({
    data: {
      group_id: data.groupId,
      user_id: data.userId,
      message_text: data.message
    }
  });
};

export default {
  createGroup,
  findAllGoups,
  findByGroupId,
  postMessage
};
