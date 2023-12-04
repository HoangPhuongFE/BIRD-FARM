// controllers/nest.controller.js

import { Request, Response } from "express";
import {
  createNest,
  deleteNest,
  getAllNests,
  getNestById,
  updateNest,
} from "../services/nest.service";

// Get all nest
export const getAll = async (req: Request, res: Response) => {
  const params = req.query;
  
  res.status(200).json(await getAllNests(params));
};

// Get nest by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).json(await getNestById({ id: Number(id) }));
};

// Create nest
export const create = async (req: Request, res: Response) => {
  const data = req.body;
  res.status(200).json(await createNest(data));
};

// Update nest
export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  res.status(200).json(await updateNest({ id }, data));
};

// Delete nest
export const del = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  res.status(200).json(await deleteNest({ id }));
};
