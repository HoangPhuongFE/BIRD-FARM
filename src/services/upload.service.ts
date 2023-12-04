import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

export const uploadBirdImage = async (imageUrl: string, id: number) => {
  return await prisma.bird.update({
    where: { id: id },
    data: { imageUrl: imageUrl },
  });
};

export const uploadNestImage = async (imageUrl: string, id: number) => {
  return await prisma.nest.update({
    where: { id: id },
    data: { imageUrl: imageUrl },
  });
};

export const uploadAvataImage = async (imageUrl: string, id: number) => {
  return await prisma.account.update({
    where: { id: id },
    data: { avata: imageUrl },
    select: {
      id: false,
      avata: true,
      username: true,
      fullName: true,
      email: true,
      phoneNumber: true,
      isBan: false,
      point: true,
      roleId: true,
      createAt: true,
      updatedAt: true,
    },
  });
};
