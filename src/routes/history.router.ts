// Historys.router.ts
import PromiseRouter from "express-promise-router";
import * as HistorysController from "../controllers/history.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();
router.get("/", checkRole(PUBLIC), HistorysController.getAll);
router.get("/:id", checkRole(PUBLIC), HistorysController.getById);
router.post("/", checkRole(PUBLIC), HistorysController.create);
router.put("/:id", checkRole(PUBLIC), HistorysController.update);
router.delete("/:id", checkRole(PUBLIC), HistorysController.del);
export default router;
