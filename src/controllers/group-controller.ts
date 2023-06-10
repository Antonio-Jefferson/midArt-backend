import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';

import groupService from '../services/group-service';

const createGroupe = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /group'));
  const userId = res.locals.userId;
  const { name, description, image } = req.body;
  try {
    await groupService.createGroup({ userId, name, description, image });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const findAllGroups = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /group'));
  const userId = res.locals.userId;
  try {
    const groups = await groupService.findAllGroups(userId);
    res.status(200).send(groups);
  } catch (error) {
    next(error);
  }
};

const postMessage = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /group/messages/:groupId'));
  const userId = res.locals.userId;
  const id = req.params.groupId;
  const { message } = req.body;
  const groupId = Number(id);

  try {
    await groupService.postMessage({ userId, groupId, message });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const findAllMessagesGroup = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /group/messages/:groupId'));
  const userId = res.locals.userId;
  const id = req.params.groupId;
  const groupId = Number(id);

  try {
    const messages = await groupService.findAllMessagesGroup(userId, groupId);
    res.status(200).send(messages);
  } catch (error) {
    next(error);
  }
};

const postMembers = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('POST /group/members'));
  const { userId, groupId } = req.body;
  try {
    await groupService.postMembers(userId, groupId);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const findGroupById = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('GET /group/:groupId'));
  const { groupId } = req.params;
  try {
    const group = await groupService.findGroupById(Number(groupId));
    res.status(200).send(group);
  } catch (error) {
    next(error);
  }
};

const deleteGroup = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('DELETE /group/:groupId'));
  const userId = res.locals.userId;
  const { groupId } = req.params;

  try {
    await groupService.deleteGroup(Number(groupId), userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const exit = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('DELETE /group/exit'));
  const userId = res.locals.userId;
  const { groupId } = req.body;
  try {
    await groupService.exit(userId, groupId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const deleteMemberGroup = async (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyan('DELETE /group/member'));
  const userId = res.locals.userId;
  const { groupId, memberUserId } = req.body;
  try {
    await groupService.deleteMemberGroup(userId, groupId, memberUserId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default {
  createGroupe,
  findAllGroups,
  postMessage,
  findAllMessagesGroup,
  postMembers,
  findGroupById,
  deleteGroup,
  exit,
  deleteMemberGroup
};
