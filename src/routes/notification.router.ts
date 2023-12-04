// notifications.router.ts
import PromiseRouter from "express-promise-router";
import * as NotificationsController from "../controllers/notification.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), NotificationsController.getAll);
router.get("/:id", checkRole(PUBLIC), NotificationsController.getById);
router.post("/", checkRole(PUBLIC), NotificationsController.create);
router.put("/:id", checkRole(PUBLIC), NotificationsController.update);
router.delete("/:id", checkRole(PUBLIC), NotificationsController.del);
export default router;
