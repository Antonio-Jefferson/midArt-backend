import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const multerConfig = () => {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads');
  storage: multer.diskStorage({
    destination: () => {},
    filename: () => {}
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ];

    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true)
    }else{
    cb(new Error('invalide file type.'))
    }
  }
};
