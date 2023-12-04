// bird.router.ts
import PromiseRouter from "express-promise-router";
import * as NestController from "../controllers/nest.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";
import nestCreateCheck from "../middlewares/nestCreateCheck.middleware";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), NestController.getAll);
router.get("/:id", checkRole(PUBLIC), NestController.getById);
router.post("/", checkRole(PUBLIC), nestCreateCheck(), NestController.create);
router.put("/:id", checkRole(PUBLIC), NestController.update);
router.delete("/:id", checkRole(PUBLIC), NestController.del);
export default router;
