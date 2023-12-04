// Deliverys.router.ts
import PromiseRouter from "express-promise-router";
import * as DeliverysController from "../controllers/delivery.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), DeliverysController.getAll);
router.get("/:id", checkRole(PUBLIC), DeliverysController.getById);
router.post("/", checkRole(PUBLIC), DeliverysController.create);
router.put("/:id", checkRole(PUBLIC), DeliverysController.update);
router.delete("/:id", checkRole(PUBLIC), DeliverysController.del);
export default router;
