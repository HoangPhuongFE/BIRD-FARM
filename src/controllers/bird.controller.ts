// controllers/Bird.controller.js

import { Request, Response } from "express";
import {
  createBird,
  deleteBird,
  getAllBirds,
  getBirdById,
  updateBird,
} from "../services/bird.service";

// Get all Birds
export const getAll = async (req: Request, res: Response) => {
  const params = req.query;
  
  res.status(200).json(await getAllBirds(params));
};

// Get Bird by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).json(await getBirdById({ id: Number(id) }));
};

// Create Bird
export const create = async (req: Request, res: Response) => {
  const data = req.body;
  res.status(200).json(await createBird(data));
};

// Update Bird
export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  res.status(200).json(await updateBird({ id }, data));
};

// Delete Bird
export const del = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  res.status(200).json(await deleteBird({ id }));
};
