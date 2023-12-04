import { Account, Prisma } from "@prisma/client";
import PrismaService from "./prisma.service";
import sendMail from "../helper/mail";
import getRandomCode from "../helper/randomNumber";

const prisma = PrismaService.getInstance();

//NOTE - Get All account service
export const getAllAccount = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.AccountWhereUniqueInput;
  where?: Prisma.AccountWhereInput;
  orderBy?: Prisma.AccountOrderByWithRelationInput;
}): Promise<Account[]> => {
  try {
    return prisma.account.findMany(params);
  } catch (err) {
    throw err;
  }
};

//NOTE - get user by id
export const getAccountById = async (
  id: Prisma.AccountWhereUniqueInput
): Promise<Account | null> => {
  try {
    return prisma.account.findUnique({ where: id });
  } catch (err) {
    throw err;
  }
};

// Update an existing Account
export const updateAccount = async (
  id: Prisma.AccountWhereUniqueInput,
  data: Prisma.AccountUpdateInput
): Promise<Account> => {
  return prisma.account.update({
    where: id,
    data,
  });
};

// Delete a Account
export const deleteAccount = async (
  id: Prisma.AccountWhereUniqueInput
): Promise<Account> => {
  await prisma.verifyToken.deleteMany({
    where: {
      account: id,
    },
  });
  const account = await prisma.account.delete({ where: id });
  return account;
};

//NOTE - ban account by id
export const banAccountById = (
  id: Prisma.AccountWhereUniqueInput
): Promise<Account> => {
  try {
    return prisma.account.update({ where: id, data: { isBan: true } });
  } catch (err) {
    throw err;
  }
};

//NOTE - reset password
export const resetPassword = async (id: number) => {
  const account: Account | null = await prisma.account.findUnique({
    where: { id: id },
  });
  if (account != null) {
    const code = getRandomCode();
    sendMail.sendMailResetPassword(account.email, code);
    await prisma.resetPassCode.create({
      data: { code: code, account: { connect: { id } } },
    });
  } else {
    throw new Error("Accoutn not found");
  }
};

export const verifyCode = async (id: number, code: string) => {
  const codeToken = await prisma.resetPassCode.findUnique({
    where: { code: code, accountId: id },
  });
  if (codeToken == null) {
    throw new Error("Code invalid");
  }
  await prisma.resetPassCode.update({
    where: { code: code, accountId: id },
    data: { isActive: true },
  });
};
