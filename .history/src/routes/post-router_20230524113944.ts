import multer from 'multer';

import { Router } from 'express';

import multerConfig from '../configs/multer';
import postController from '../controllers/post-controller';


const postRouter = Router();

postRouter.post('/upload/draw', multer(multerConfig).single('file'), postController.createPost);

export default postRouter;
