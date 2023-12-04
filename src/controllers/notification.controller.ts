// notifications.controller.ts

import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import {
  createNotification,
  deleteNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
} from "../services/notification.service";

// Get all notifications
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;

  res.status(200).json(await getAllNotifications(params));
};

// Get notification by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json(await getNotificationById({ id: Number(id) }));
};

// Create notification
export const create = async (req: Request, res: Response) => {
  const data: Prisma.NotificationCreateInput = req.body;

  res.status(200).json(await createNotification(data));
};

// Update notification
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.NotificationUpdateInput = req.body;

  res.status(200).json(await updateNotification({ id }, data));
};

// Delete notification
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  res.status(200).json(await deleteNotification({ id }));
};
