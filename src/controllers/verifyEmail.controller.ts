import { Request, Response } from "express";
import VerifyTokenService from "../services/verifyToken.service";

export const verify = async (req: Request, res: Response) => {
  const id = req.body.id;
  VerifyTokenService.verifyEmail(id);
  res.status(200).json("success");
};
