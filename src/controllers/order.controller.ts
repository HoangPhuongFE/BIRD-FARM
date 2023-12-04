// Orders.controller.ts

import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../services/order.service";

// Get all Orders
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;

  res.status(200).json(await getAllOrders(params));
};

// Get Order by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json(await getOrderById({ id: Number(id) }));
};

// Create Order
export const create = async (req: Request, res: Response) => {
  const data: Prisma.OrderCreateInput = req.body;

  res.status(200).json(await createOrder(data));
};

// Update Order
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.OrderUpdateInput = req.body;

  res.status(200).json(await updateOrder({ id }, data));
};

// Delete Order
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  res.status(200).json(await deleteOrder({ id }));
};
