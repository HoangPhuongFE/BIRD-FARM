import PromiseRouter from "express-promise-router";
import * as DiscountController from "../controllers/discount.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC, ADMIN } from "../config/permission.enum";

const router = PromiseRouter();

router.get("/", checkRole(PUBLIC), DiscountController.getAll);
router.get("/:id", checkRole(PUBLIC), DiscountController.getById);
router.post("/", checkRole(ADMIN), DiscountController.create);
router.put("/:id", checkRole(ADMIN), DiscountController.update);
router.delete("/:id", checkRole(ADMIN), DiscountController.del);
router.put("/apply/:id", checkRole(ADMIN), DiscountController.apply);

export default router;
