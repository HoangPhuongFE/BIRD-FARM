import { Request, Response } from "express";
import {
  banAccountById,
  getAccountById,
  getAllAccount,
  updateAccount,
  deleteAccount,
  resetPassword,
  verifyCode,
} from "../services/account.service";

//NOTE - get all account
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;
  res.status(200).json(await getAllAccount(params));
};

//NOTE - get account by id
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).json(await getAccountById({ id: Number(id) }));
};

//NOTE - ban account by id
export const BanById = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).json(await banAccountById({ id: Number(id) }));
};

// Update Account
export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  res.status(200).json(await updateAccount({ id }, data));
};

// Delete Account
export const del = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  res.status(200).json(await deleteAccount({ id }));
};

export const resetPass = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await resetPassword(id);
  res.status(200).json("success");
};

export const verifyPassCode = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const code = req.body.code;
  await verifyCode(id, code);
  res.status(200).json("success");
};
