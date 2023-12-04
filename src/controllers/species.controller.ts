import { Request, Response } from "express"; //NOTE - get all account
import {
  createSpecies,
  deleteSpecies,
  getAllSpecies,
  getSpeciesById,
  updateSpecies,
} from "../services/species.service";
import { Prisma } from "@prisma/client";

//NOTE - get all species
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;
  res.status(200).json(await getAllSpecies(params));
};

//NOTE - get species by id
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).json(await getSpeciesById({ id: Number(id) }));
};

//NOTE - create species
export const create = async (req: Request, res: Response) => {
  const data: Prisma.SpeciesCreateInput = req.body;
  res.status(200).json(await createSpecies(data));
};

//NOTE - update species
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.SpeciesUpdateInput = req.body;
  res.status(200).json(await updateSpecies({ id }, data));
};

//NOTE - delete species
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  res.status(200).json(await deleteSpecies({ id }));
};
