import { Router } from 'express';

import loginController from '../controllers/login-controller';

const loginRouter = Router();

loginRouter.get('/google', loginController.loginGoogle);

export default loginRouter;
