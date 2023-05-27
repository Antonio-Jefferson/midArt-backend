import multer from 'multer';
import multerConfig

import { Router } from 'express';

const postRouter = Router();

postRouter.post('/upload/draw', multer().single('file'));

export default postRouter;
