// Orders.router.ts
import PromiseRouter from "express-promise-router";
import * as OrdersController from "../controllers/order.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), OrdersController.getAll);
router.get("/:id", checkRole(PUBLIC), OrdersController.getById);
router.post("/", checkRole(PUBLIC), OrdersController.create);
router.put("/:id", checkRole(PUBLIC), OrdersController.update);
router.delete("/:id", checkRole(PUBLIC), OrdersController.del);
export default router;
