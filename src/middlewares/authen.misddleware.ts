import { NextFunction, Request, Response } from "express";
import { SignIn } from "../type/auth.type";

const AuthenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const signInInfo: SignIn = req.body;
  next();
};

export default AuthenMiddleware;
