import PromiseRouter from "express-promise-router";
import * as SpeciesController from "../controllers/species.controller";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();

router.get("/", checkRole(PUBLIC), SpeciesController.getAll);
router.get("/:id", checkRole(PUBLIC), SpeciesController.getById);
router.post("/", checkRole(PUBLIC), SpeciesController.create);
router.put("/:id", checkRole(PUBLIC), SpeciesController.update);
router.delete("/:id", checkRole(PUBLIC), SpeciesController.del);

export default router;
