// Feedbacks.router.ts
import PromiseRouter from "express-promise-router";
import * as FeedbacksController from "../controllers/feedback.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), FeedbacksController.getAll);
router.get("/:id", checkRole(PUBLIC), FeedbacksController.getById);
router.post("/", checkRole(PUBLIC), FeedbacksController.create);
router.put("/:id", checkRole(PUBLIC), FeedbacksController.update);
router.delete("/:id", checkRole(PUBLIC), FeedbacksController.del);
export default router;
