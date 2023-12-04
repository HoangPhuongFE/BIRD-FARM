// Feedbacks.controller.ts

import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import {
  createFeedback,
  deleteFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
} from "../services/feedback.service";

// Get all Feedbacks
export const getAll = async (req: Request, res: Response) => {
  const params = req.body.params;

  res.status(200).json(await getAllFeedbacks(params));
};

// Get Feedback by ID
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json(await getFeedbackById({ id: Number(id) }));
};

// Create Feedback
export const create = async (req: Request, res: Response) => {
  const data: Prisma.FeedbackCreateInput = req.body;

  res.status(200).json(await createFeedback(data));
};

// Update Feedback
export const update = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const data: Prisma.FeedbackUpdateInput = req.body;

  res.status(200).json(await updateFeedback({ id }, data));
};

// Delete Feedback
export const del = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  res.status(200).json(await deleteFeedback({ id }));
};
