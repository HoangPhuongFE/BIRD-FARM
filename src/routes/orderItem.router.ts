// OrderItems.router.ts
import PromiseRouter from "express-promise-router";
import * as OrderItemsController from "../controllers/orderItem.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), OrderItemsController.getAll);
router.get("/:id", checkRole(PUBLIC), OrderItemsController.getById);
router.post("/", checkRole(PUBLIC), OrderItemsController.create);
router.put("/:id", checkRole(PUBLIC), OrderItemsController.update);
router.delete("/:id", checkRole(PUBLIC), OrderItemsController.del);
export default router;
