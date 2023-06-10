import { groupData, messageData } from '../@types';
import erros from '../erros';
import groupRepository from '../repositories/group-repository';
import userRepository from '../repositories/user-repository';

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

const postMembers = async (userId: number, groupId: number) => {
  const existUser = await userRepository.findUserById(userId);
  if (!existUser.id !== undefined) throw erros.notFoundError('user');

  const existGroup = await groupRepository.findByGroupId(groupId);
  if (!existGroup) throw erros.notFoundError('group');

  await groupRepository.postMembers(userId, groupId);
};

const findGroupById = async (groupId: number) => {
  const group = await groupRepository.findGroupById(groupId);
  if (!group.id !== undefined) throw erros.notFoundError('group');

  return group;
};

const deleteGroup = async (groupId: number, userId: number) => {
  const existGroup = await groupRepository.findByGroupId(groupId);
  if (!existGroup) throw erros.notFoundError('group');

  if (existGroup.user_admin !== userId) throw erros.BadRequestError();

  await groupRepository.deleteGroup(groupId);
};

const exit = async (userId: number, groupId: number) => {
  const result = await groupRepository.getGroupMemberById(userId, groupId);
  if (!result) throw erros.notFoundError('member group');

  await groupRepository.exit(result?.id);
};

const deleteMemberGroup = async (userId: number, groupId: number, memberUserId: number) => {
  const existGroup = await groupRepository.findByGroupId(groupId);
  if (!existGroup) throw erros.notFoundError('group');

  if (existGroup.user_admin !== userId) throw erros.BadRequestError();

  const result = await groupRepository.getGroupMemberById(memberUserId, groupId);
  if (!result) throw erros.notFoundError('member group');

  await groupRepository.exit(result?.id);
};

export default {
  createGroup,
  findAllGroups,
  postMessage,
  findAllMessagesGroup,
  postMembers,
  findGroupById,
  deleteGroup,
  exit,
  deleteMemberGroup
};
