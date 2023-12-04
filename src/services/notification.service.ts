import { Notification, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

// Get all notifications
export const getAllNotifications = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.NotificationWhereUniqueInput;
  where?: Prisma.NotificationWhereInput;
  orderBy?: Prisma.NotificationOrderByWithRelationInput;
}): Promise<Notification[]> => {
  return prisma.notification.findMany(params);
};

// Get single notification by ID
export const getNotificationById = async (
  id: Prisma.NotificationWhereUniqueInput
): Promise<Notification | null> => {
  return prisma.notification.findUnique({
    where: id,
  });
};

// Create a new notification
export const createNotification = async (
  data: Prisma.NotificationCreateInput
): Promise<Notification> => {
  return prisma.notification.create({ data });
};

// Update an existing notification
export const updateNotification = async (
  id: Prisma.NotificationWhereUniqueInput,
  data: Prisma.NotificationUpdateInput
): Promise<Notification> => {
  return prisma.notification.update({
    where: id,
    data,
  });
};

// Delete a notification
export const deleteNotification = async (
  id: Prisma.NotificationWhereUniqueInput
): Promise<Notification> => {
  return prisma.notification.delete({ where: id });
};
