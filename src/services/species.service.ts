import { Species, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

//NOTE - Get all species
export const getAllSpecies = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.SpeciesWhereUniqueInput;
  where?: Prisma.SpeciesWhereInput;
  orderBy?: Prisma.SpeciesOrderByWithRelationInput;
}): Promise<Species[]> => {
  return prisma.species.findMany(params);
};

//NOTE - Get single species by ID
export const getSpeciesById = async (
  id: Prisma.SpeciesWhereUniqueInput
): Promise<Species | null> => {
  return prisma.species.findUnique({ where: id });
};

//NOTE - Create new species
export const createSpecies = async (
  data: Prisma.SpeciesCreateInput
): Promise<Species> => {
  return prisma.species.create({ data });
};

//NOTE - Update a species
export const updateSpecies = async (
  id: Prisma.SpeciesWhereUniqueInput,
  data: Prisma.SpeciesUpdateInput
): Promise<Species> => {
  return prisma.species.update({
    where: id,
    data,
  });
};

//NOTE - Delete a species
export const deleteSpecies = async (
  id: Prisma.SpeciesWhereUniqueInput
): Promise<Species> => {
  return prisma.species.delete({ where: id });
};
