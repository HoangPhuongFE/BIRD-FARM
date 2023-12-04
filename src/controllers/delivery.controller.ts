// Deliverys.controller.ts

import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import {
  createDelivery,
  deleteDelivery,
  getAllDeliverys,
  getDeliveryById,
  updateDelivery,
} from "../services/delivery.service";

// Get all Deliverys
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;

  res.status(200).json(await getAllDeliverys(params));
};

// Get Delivery by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json(await getDeliveryById({ id: Number(id) }));
};

// Create Delivery
export const create = async (req: Request, res: Response) => {
  const data: Prisma.DeliveryCreateInput = req.body;

  res.status(200).json(await createDelivery(data));
};

// Update Delivery
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.DeliveryUpdateInput = req.body;

  res.status(200).json(await updateDelivery({ id }, data));
};

// Delete Delivery
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  res.status(200).json(await deleteDelivery({ id }));
};
