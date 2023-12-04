import { Request, Response } from "express";

import { register as regis, signIn } from "../services/auth.service";
import { Register, SignIn } from "../type/auth.type";
import sendMail from "../helper/mail";

//login
export const login = async (req: Request, res: Response) => {
  const signInInfo: SignIn = req.body;
  const account = await signIn(signInInfo);
  res.status(200).json(account);
};

//Register
export const register = async (req: Request, res: Response) => {
  const registerInfo: Register = req.body;
  const register = await regis(registerInfo);
  res.status(200).json(register);
};

const AuthController = {
  login,
  register,
};

export default AuthController;
