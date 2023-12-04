import multer from "multer";

//NOTE - Set storage engine
const storageBirdImage = multer.diskStorage({
  destination: "./public/uploads/bird",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

//NOTE - Init upload
const uploadBirdImage = multer({
  storage: storageBirdImage,
});

//NOTE - Set storage engine
const storageNestImage = multer.diskStorage({
  destination: "./public/uploads/nest",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

//NOTE - Init upload
const uploadNestImage = multer({
  storage: storageNestImage,
});

//NOTE - Set storage engine
const storageAccountImage = multer.diskStorage({
  destination: "./public/uploads/avata",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

//NOTE - Init upload
const uploadAccountImage = multer({
  storage: storageAccountImage,
});

export { uploadBirdImage, uploadNestImage, uploadAccountImage };
