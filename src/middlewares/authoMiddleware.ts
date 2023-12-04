import { NextFunction, Request, Response } from "express";
import PermissionDeniedError from "../error/permissionDeniedError";

/**
 * Check permission to access api
 * @param allowedRoles
 * @returns
 */
export default function checkRole(allowedRoles: String[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const permission = req.headers["permission"];
    if (typeof permission == "string" && allowedRoles.includes(permission)) {
      console.log("Check permission success");
      next();
    } else {
      throw new PermissionDeniedError();
    }
  };
}
