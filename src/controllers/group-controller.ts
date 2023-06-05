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

export default {
  createGroupe,
  findAllGroups,
  postMessage
};
