import PromiseRouter from "express-promise-router";
import checkRole from "../middlewares/authoMiddleware";
import { ADMIN, PUBLIC } from "../config/permission.enum";
import {
  BanById,
  getAll,
  getById,
  update,
  del,
  resetPass,
  verifyPassCode,
} from "../controllers/account.controller";

const route = PromiseRouter();

//NOTE - Get all account
route.get("/", checkRole(ADMIN), getAll);

//NOTE - Get account by id
route.get("/:id", checkRole(ADMIN), getById);

//NOTE - Ban account by id
route.get("/ban/:id", checkRole(ADMIN), BanById);
route.put("/:id", checkRole(ADMIN), update);
route.delete("/:id", checkRole(ADMIN), del);
route.post("/resetPass/:id", checkRole(PUBLIC), resetPass);
route.post("/verifyPassCode/:id", checkRole(PUBLIC), verifyPassCode);

export default route;
