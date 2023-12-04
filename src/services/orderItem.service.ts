import { OrderItem, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all OrderItems
export const getAllOrderItems = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.OrderItemWhereUniqueInput;
  where?: Prisma.OrderItemWhereInput;
  orderBy?: Prisma.OrderItemOrderByWithRelationInput;
}): Promise<OrderItem[]> => {
  return prisma.orderItem.findMany(params);
};

// Get single OrderItem by ID
export const getOrderItemById = async (
  id: Prisma.OrderItemWhereUniqueInput
): Promise<OrderItem | null> => {
  return prisma.orderItem.findUnique({ where: id });
};

// Create a new OrderItem
export const createOrderItem = async (
  data: Prisma.OrderItemCreateInput
): Promise<OrderItem> => {
  return prisma.orderItem.create({ data });
};

// Update an existing OrderItem
export const updateOrderItem = async (
  id: Prisma.OrderItemWhereUniqueInput,
  data: Prisma.OrderItemUpdateInput
): Promise<OrderItem> => {
  return prisma.orderItem.update({
    where: id,
    data,
  });
};

// Delete a OrderItem
export const deleteOrderItem = async (
  id: Prisma.OrderItemWhereUniqueInput
): Promise<OrderItem> => {
  return prisma.orderItem.delete({ where: id });
};
