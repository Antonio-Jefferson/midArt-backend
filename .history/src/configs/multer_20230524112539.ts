import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const multerConfig = () => {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads');
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb)

}