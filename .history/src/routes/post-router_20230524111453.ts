import { Router } from 'express';
import multer from 'm'
const postRouter = Router();

postRouter.post('/upload/draw', multer);

export default postRouter;