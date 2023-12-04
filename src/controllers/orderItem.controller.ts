// OrderItems.controller.ts

import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import {
  createOrderItem,
  deleteOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
} from "../services/orderItem.service";

// Get all OrderItems
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;

  res.status(200).json(await getAllOrderItems(params));
};

// Get OrderItem by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json(await getOrderItemById({ id: Number(id) }));
};

// Create OrderItem
export const create = async (req: Request, res: Response) => {
  const data: Prisma.OrderItemCreateInput = req.body;

  res.status(200).json(await createOrderItem(data));
};

// Update OrderItem
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.OrderItemUpdateInput = req.body;

  res.status(200).json(await updateOrderItem({ id }, data));
};

// Delete OrderItem
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  res.status(200).json(await deleteOrderItem({ id }));
};
