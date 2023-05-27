import multer from 'multer';
import multerConfig from '../configs/'

import { Router } from 'express';

const postRouter = Router();

postRouter.post('/upload/draw', multer().single('file'));

export default postRouter;
