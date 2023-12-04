import { Bird, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all birds
export const getAllBirds = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.BirdWhereUniqueInput;
  where?: Prisma.BirdWhereInput;
  orderBy?: Prisma.BirdOrderByWithRelationInput;
}): Promise<Bird[]> => {
  
   // Convert skip and take to integers
   
   const skip = params.skip ? parseInt(params.skip.toString(), 10) : undefined;
   const take = params.take ? parseInt(params.take.toString(), 10) : undefined;

 return prisma.bird.findMany({
    skip,
    take,
    cursor: params.cursor,
    where: params.where,
    orderBy: params.orderBy,
  });
};

// Get single bird by ID
export const getBirdById = async (
  id: Prisma.BirdWhereUniqueInput
): Promise<Bird | null> => {
  return prisma.bird.findUnique({
    where: id,
  });
};

// Create a new bird
export const createBird = async (
  data: Prisma.BirdCreateInput
): Promise<Bird> => {
  return prisma.bird.create({ data });
};

// Update an existing bird
export const updateBird = async (
  id: Prisma.BirdWhereUniqueInput,
  data: Prisma.BirdUpdateInput
): Promise<Bird> => {
  return prisma.bird.update({
    where: id,
    data,
  });
};

// Delete a bird
export const deleteBird = async (
  id: Prisma.BirdWhereUniqueInput
): Promise<Bird> => {
  return prisma.bird.delete({ where: id });
};
