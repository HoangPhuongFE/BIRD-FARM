import PromiseRouter from "express-promise-router";
import { verify } from "../controllers/verifyEmail.controller";

const router = PromiseRouter();

router.get("/:id", verify);

export default router;
