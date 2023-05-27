import { Router } from 'express';
import multer from 'multer';

const postRouter = Router();

postRouter.post('/upload/draw', multer);

export default postRouter;
