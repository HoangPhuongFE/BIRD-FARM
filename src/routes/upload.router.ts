import PromiseRouter from "express-promise-router";
import {
  uploadAccount,
  uploadBird,
  uploadNest,
} from "../controllers/upload.controller";
import {
  uploadAccountImage,
  uploadBirdImage,
  uploadNestImage,
} from "../middlewares/multer.middleware";

const router = PromiseRouter();

router.post("/bird/:id", uploadBirdImage.single("image"), uploadBird);
router.post("/nest/:id", uploadNestImage.single("image"), uploadNest);
router.post("/avata/:id", uploadAccountImage.single("image"), uploadAccount);

export default router;
