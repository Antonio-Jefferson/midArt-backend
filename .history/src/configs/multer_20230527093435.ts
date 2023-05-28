import aws from 'aws-sdk';
import crypto from 'crypto';
import dotenv from 'dotenv';
import multer from 'multer';
import multers3 from 'multer-s3';

dotenv.config();

import { Request } from 'express';

import { uploadsDirectory } from './path';

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
    s3Client: new aws.S3(),
    bucket: 'midart2',
    contentType: multers3.AUTO_CONTENT_TYPE,
    acl: 'punlic-read',
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