import { VerifyToken } from "@prisma/client";
import PrismaService from "./prisma.service";

const prisma = PrismaService.getInstance();

const createToken = (id: number): Promise<VerifyToken> => {
  return prisma.verifyToken.create({
    data: { account: { connect: { id: id } } },
  });
};

const verifyEmail = async (id: string) => {
  const verifyToken: VerifyToken | null = await prisma.verifyToken.findUnique({
    where: { id: id },
  });
  if (verifyToken == null) {
    throw new Error("token not found ");
  } else if (verifyToken.isActive) {
    throw new Error("token deactive");
  }
  await prisma.verifyToken.update({
    where: { id: id },
    data: { isActive: true },
  });

  await prisma.account.update({
    where: { id: verifyToken.accountId },
    data: { isActive: true },
  });
};
const VerifyTokenService = {
  createToken,
  verifyEmail,
};

export default VerifyTokenService;
