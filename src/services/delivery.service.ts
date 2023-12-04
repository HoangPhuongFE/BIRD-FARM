import { Delivery, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all Deliverys
export const getAllDeliverys = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.DeliveryWhereUniqueInput;
  where?: Prisma.DeliveryWhereInput;
  orderBy?: Prisma.DeliveryOrderByWithRelationInput;
}): Promise<Delivery[]> => {
  return prisma.delivery.findMany(params);
};

// Get single Delivery by ID
export const getDeliveryById = async (
  id: Prisma.DeliveryWhereUniqueInput
): Promise<Delivery | null> => {
  return prisma.delivery.findUnique({ where: id });
};

// Create a new Delivery
export const createDelivery = async (
  data: Prisma.DeliveryCreateInput
): Promise<Delivery> => {
  return prisma.delivery.create({ data });
};

// Update an existing Delivery
export const updateDelivery = async (
  id: Prisma.DeliveryWhereUniqueInput,
  data: Prisma.DeliveryUpdateInput
): Promise<Delivery> => {
  return prisma.delivery.update({
    where: id,
    data,
  });
};

// Delete a Delivery
export const deleteDelivery = async (
  id: Prisma.DeliveryWhereUniqueInput
): Promise<Delivery> => {
  return prisma.delivery.delete({ where: id });
};
