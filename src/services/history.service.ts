import { History, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all Historys
export const getAllHistorys = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.HistoryWhereUniqueInput;
  where?: Prisma.HistoryWhereInput;
  orderBy?: Prisma.HistoryOrderByWithRelationInput;
}): Promise<History[]> => {
  return prisma.history.findMany(params);
};

// Get single History by ID
export const getHistoryById = async (
  id: Prisma.HistoryWhereUniqueInput
): Promise<History | null> => {
  return prisma.history.findUnique({ where: id });
};

// Create a new History
export const createHistory = async (
  data: Prisma.HistoryCreateInput
): Promise<History> => {
  return prisma.history.create({ data });
};

// Update an existing History
export const updateHistory = async (
  id: Prisma.HistoryWhereUniqueInput,
  data: Prisma.HistoryUpdateInput
): Promise<History> => {
  return prisma.history.update({
    where: id,
    data,
  });
};

// Delete a History
export const deleteHistory = async (
  id: Prisma.HistoryWhereUniqueInput
): Promise<History> => {
  return prisma.history.delete({ where: id });
};
