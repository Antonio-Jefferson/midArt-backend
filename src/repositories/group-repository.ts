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

const findAllMessagesGroup = async (groupId: number) => {
  return await prisma.messages.findMany({
    where: {
      group_id: groupId
    },
    select: {
      id: true,
      message_text: true,
      users: {
        select: {
          id: true,
          username: true,
          profile_image: true
        }
      }
    }
  });
};

const postMembers = async (userId: number, groupId: number) => {
  await prisma.group_members.create({
    data: {
      user_id: userId,
      group_id: groupId
    }
  });
};

const findGroupById = async (groupId: number) => {
  const group = await prisma.groups.findUnique({
    where: {
      id: groupId
    },
    select: {
      id: true,
      group_name: true,
      group_image: true,
      group_members: {
        select: {
          id: true,
          user_id: true,
          users: {
            select: {
              id: true,
              profile_image: true,
              username: true
            }
          }
        }
      }
    }
  });
  const formattedGroup = {
    id: group?.id,
    group_name: group?.group_name,
    group_image: group?.group_image,
    group_members: group?.group_members.map((member) => ({
      id: member.id,
      userId: member.user_id,
      profile_image: member.users.profile_image,
      username: member.users.username
    }))
  };

  return formattedGroup;
};

export default {
  createGroup,
  findAllGoups,
  findByGroupId,
  postMessage,
  findAllMessagesGroup,
  postMembers,
  findGroupById
};
