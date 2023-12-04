import { Order, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all Orders
export const getAllOrders = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.OrderWhereUniqueInput;
  where?: Prisma.OrderWhereInput;
  orderBy?: Prisma.OrderOrderByWithRelationInput;
}): Promise<Order[]> => {
  return prisma.order.findMany(params);
};

// Get single Order by ID
export const getOrderById = async (
  id: Prisma.OrderWhereUniqueInput
): Promise<Order | null> => {
  return prisma.order.findUnique({ where: id });
};

// Create a new Order
export const createOrder = async (
  data: Prisma.OrderCreateInput
): Promise<Order> => {
  return prisma.order.create({ data });
};

// Update an existing Order
export const updateOrder = async (
  id: Prisma.OrderWhereUniqueInput,
  data: Prisma.OrderUpdateInput
): Promise<Order> => {
  return prisma.order.update({
    where: id,
    data,
  });
};

// Delete a Order
export const deleteOrder = async (
  id: Prisma.OrderWhereUniqueInput
): Promise<Order> => {
  return prisma.order.delete({ where: id });
};
