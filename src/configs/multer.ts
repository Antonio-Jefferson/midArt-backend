import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import crypto from 'crypto';
import { config } from 'dotenv';
import multer, { StorageEngine } from 'multer';
import multerS3 from 'multer-s3';

import { uploadsDirectory } from './path';

config();

const s3Config: S3ClientConfig = {
  region: `${process.env.AWS_REGION}`,
  credentials: {
    accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`
  }
};

const s3Client = new S3Client(s3Config);

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
  s3: multerS3({
    s3: s3Client,
    bucket: 'midart2',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, '');
        const filename = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, filename);
      });
    }
  })
};

const multerConfig: multer.Options = {
  dest: uploadsDirectory,
  storage: storageTypes['local'],
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
