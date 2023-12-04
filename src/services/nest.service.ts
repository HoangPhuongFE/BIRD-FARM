import { Nest, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all nests test demo //
export const getAllNests = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.NestWhereUniqueInput;
  where?: Prisma.NestWhereInput;
  orderBy?: Prisma.NestOrderByWithRelationInput;
}): Promise<Nest[]> => {
  
  // Convert skip and take to integers

  const skip = params.skip ? parseInt(params.skip.toString(), 10) : undefined;
  const take = params.take ? parseInt(params.take.toString(), 10) : undefined;
  return prisma.nest.findMany({
    skip,
    take,
    cursor: params.cursor,
    where: params.where,
    orderBy: params.orderBy,
    include: { fatherBird: true, motherBird: true },
  });
};

// Get single nest by ID
export const getNestById = async (
  id: Prisma.NestWhereUniqueInput
): Promise<Nest | null> => {
  return prisma.nest.findUnique({
    where: id,
    include: { fatherBird: true, motherBird: true },
  });
};

// Create a new nest
export const createNest = async (
  data: Prisma.NestCreateInput
): Promise<Nest> => {
  return prisma.nest.create({ data });
};

// Update an existing nest
export const updateNest = async (
  id: Prisma.NestWhereUniqueInput,
  data: Prisma.NestUpdateInput
): Promise<Nest> => {
  return prisma.nest.update({
    where: id,
    data,
  });
};

// Delete a nest
export const deleteNest = async (
  id: Prisma.NestWhereUniqueInput
): Promise<Nest> => {
  return prisma.nest.delete({ where: id });
};
