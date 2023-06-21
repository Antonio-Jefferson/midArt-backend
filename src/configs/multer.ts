import crypto from 'crypto';
import { config } from 'dotenv';
import multer, { StorageEngine } from 'multer';

import { uploadsDirectory } from './path';

config();

const storageTypes: Record<string, StorageEngine> = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDirectory);
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, '');
        const filename = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, filename);
      });
    }
  }),
  farebase: multer.memoryStorage()
};

const multerConfig: multer.Options = {
  dest: uploadsDirectory,
  storage: storageTypes['farebase'],
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo inválido.'));
    }
  }
};

export default multerConfig;
