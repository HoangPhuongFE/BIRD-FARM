import { Request, Response } from "express";
import {
  applyDiscount,
  createDiscount,
  deleteDiscount,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
} from "../services/discount.service";
import { Prisma } from "@prisma/client";

// Get all discounts
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;
  res.status(200).json(await getAllDiscounts(params));
};

// Get discount by id
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).json(await getDiscountById({ id: Number(id) }));
};

// Create a new discount
export const create = async (req: Request, res: Response) => {
  const data: Prisma.DiscountCreateInput = req.body;
  res.status(200).json(await createDiscount(data));
};

// Update a discount
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.DiscountUpdateInput = req.body;
  res.status(200).json(await updateDiscount({ id }, data));
};

// Delete a discount
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  res.status(200).json(await deleteDiscount({ id }));
};

// apply discount for product
export const apply = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const listOfId = req.body.listOfId;
  res.status(200).json(applyDiscount({ id }, listOfId));
};
