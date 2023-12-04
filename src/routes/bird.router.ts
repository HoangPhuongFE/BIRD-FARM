// routes/notification.js

import { Router } from "express";
import * as BirdController from "../controllers/bird.controller";
import checkRole from "../middlewares/authoMiddleware";
import { ADMIN, PUBLIC } from "../config/permission.enum";

const router = Router();

router.get("/", checkRole(PUBLIC), BirdController.getAll);
router.get("/:id", checkRole(PUBLIC), BirdController.getById);
router.post("/", checkRole(ADMIN), BirdController.create);
router.put("/:id", checkRole(ADMIN), BirdController.update);
router.delete("/:id", checkRole(ADMIN), BirdController.del);

export default router;
