import PromiseRouter from "express-promise-router";
import { login, register } from "../controllers/auth.controller";
import {
  validationSignIn,
  validationRegister,
} from "../validation/auth.validation";
import AuthenMiddleware from "../middlewares/authen.misddleware";
import createValidation from "../helper/createValidation";
import checkRole from "../middlewares/authoMiddleware";
import { PUBLIC } from "../config/permission.enum";

const router = PromiseRouter();

router.post(
  "/login",
  checkRole(PUBLIC),
  createValidation(validationSignIn),
  AuthenMiddleware,
  login
);

router.post(
  "/register",
  checkRole(PUBLIC),
  createValidation(validationRegister),
  register
);

export default router;
