// Historys.controller.ts

import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import {
  createHistory,
  deleteHistory,
  getAllHistorys,
  getHistoryById,
  updateHistory,
} from "../services/history.service";

// Get all Historys
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;

  res.status(200).json(await getAllHistorys(params));
};

// Get History by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json(await getHistoryById({ id: Number(id) }));
};

// Create History
export const create = async (req: Request, res: Response) => {
  const data: Prisma.HistoryCreateInput = req.body;

  res.status(200).json(await createHistory(data));
};

// Update History
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.HistoryUpdateInput = req.body;

  res.status(200).json(await updateHistory({ id }, data));
};

// Delete History
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  res.status(200).json(await deleteHistory({ id }));
};
