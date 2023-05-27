import multer from 'multer';

import multerConfig from '../configs/multer';
import postController from '../controllers/post-controller';

import { Router } from 'express';



const postRouter = Router();

postRouter.post('/upload/draw', multer(multerConfig).single('file'), postController.createPost);

export default postRouter;
