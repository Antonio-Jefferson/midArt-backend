import { Router } from 'express';

const groupRouter = Router();

import groupController from '../controllers/group-controller';

groupRouter.post('/', groupController.createGroupe);

export default groupRouter;
