import { groupData, messageData } from '../@types';
import erros from '../erros';
import groupRepository from '../repositories/group-repository';

const createGroup = async (data: groupData) => {
  await groupRepository.createGroup(data);
};

const findAllGroups = async (userId: number) => {
  const groups = await groupRepository.findAllGoups(userId);
  if (!groups) throw erros.notFoundError('group');
  return groups;
};

const postMessage = async (data: messageData) => {
  const exitGroup = await groupRepository.findByGroupId(data.groupId);
  if (!exitGroup) throw erros.notFoundError('group');

  await groupRepository.postMessage(data);
};

const findAllMessagesGroup = async (userId: number, groupId: number) => {
  const exitGroup = await groupRepository.findByGroupId(groupId);
  if (!exitGroup) throw erros.notFoundError('group');

  const messages = await groupRepository.findAllMessagesGroup(groupId);
  return messages;
};

export default {
  createGroup,
  findAllGroups,
  postMessage,
  findAllMessagesGroup
};
