import aws, { S3 } from 'aws-sdk';
import crypto from 'crypto';
import dotenv from 'dotenv';
import multer from 'multer';
import multers3 from 'multer-s3';

dotenv.config();

import { Request } from 'express';

import { uploadsDirectory } from './path';

interface ExtendedS3 extends S3 {
  destroy: () => void;
  middlewareStack: any[]; // Coloque o tipo correto aqui, se possível
  send: () => Promise<any>; // Coloque o tipo correto aqui, se possível
}

const s3Client: ExtendedS3 = new aws.S3();

const storageTypes = {
  local: multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
      cb(null, uploadsDirectory);
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        //if (err) cb(err);
        const filename = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, filename);
      });
    }
  }),
  s3: multers3({
    s3: new aws.S3(),
    bucket: 'midart2',
    contentType: multers3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        //if (err) cb(err);
        const filename = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, filename);
      });
    }
  })
};

const multerConfig = {
  dest: uploadsDirectory,
  storage: storageTypes['local'],
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  }
};

export default multerConfig;