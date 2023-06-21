import { config } from 'dotenv';
import admin from 'firebase-admin';

import { Request, Response, NextFunction } from 'express';

import serviceAccount from '../configs/firebase.json';
import erros from '../erros';

config();
const BUCKET = 'midartupload.appspot.com/';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: BUCKET
});

const buckt = admin.storage().bucket();

interface CustomFile extends Express.Multer.File {
  firebaseUrl?: string;
}

const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) throw erros.BadRequestError();

  const image = req.file as CustomFile;
  const filename = `${Date.now()}-${image.originalname}`;
  const file = buckt.file(filename);
  console.log({ file });
  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype
    }
  });

  stream.on('error', (e) => {
    console.log(e);
  });

  stream.on('finish', async () => {
    try {
      await file.makePublic();
      image.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${filename}`;
      next();
    } catch (error) {
      next(error);
    }
  });

  stream.end(image.buffer);
};

export default uploadImage;
