import { Feedback, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all feedbacks
export const getAllFeedbacks = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.FeedbackWhereUniqueInput;
  where?: Prisma.FeedbackWhereInput;
  orderBy?: Prisma.FeedbackOrderByWithRelationInput;
}): Promise<Feedback[]> => {
  return prisma.feedback.findMany(params);
};

// Get single feedback by ID
export const getFeedbackById = async (
  id: Prisma.FeedbackWhereUniqueInput
): Promise<Feedback | null> => {
  return prisma.feedback.findUnique({
    where: id,
  });
};

// Create a new feedback
export const createFeedback = async (
  data: Prisma.FeedbackCreateInput
): Promise<Feedback> => {
  return prisma.feedback.create({ data });
};

// Update an existing feedback
export const updateFeedback = async (
  id: Prisma.FeedbackWhereUniqueInput,
  data: Prisma.FeedbackUpdateInput
): Promise<Feedback> => {
  return prisma.feedback.update({
    where: id,
    data,
  });
};

// Delete a feedback
export const deleteFeedback = async (
  id: Prisma.FeedbackWhereUniqueInput
): Promise<Feedback> => {
  return prisma.feedback.delete({ where: id });
};
