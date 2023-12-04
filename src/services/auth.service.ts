import { Prisma } from "@prisma/client";
import { AccountReturnInfo, Register, SignIn } from "../type/auth.type";
import VerifyTokenService from "./verifyToken.service";
import PrismaService from "./prisma.service";
import hashPassword from "../helper/hashFuntion";
import sendMail from "../helper/mail";

const prisma = PrismaService.getInstance();

//NOTE - Sign in service
export const signIn = async (
  signInInfo: SignIn
): Promise<AccountReturnInfo> => {
  let account: AccountReturnInfo | undefined = undefined;
  try {
    account = await prisma.account.findUniqueOrThrow({
      where: {
        email: signInInfo.email,
        hashPassword: hashPassword(signInInfo.password),
      },
      select: {
        id: true,
        avata: true,
        isActive: true,
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
  } catch (error) {
    throw error;
  }
  if (account.isActive == false) {
    throw new Error("Account is not active please check mail");
  }
  return account;
};

//NOTE - Register service
export const register = async (
  registerInfo: Register
): Promise<AccountReturnInfo> => {
  let account: AccountReturnInfo | undefined = undefined;
  try {
    account = await prisma.account.create({
      data: {
        avata: registerInfo.avata,
        point: registerInfo.point,
        fullName: registerInfo.fullName,
        username: registerInfo.username,
        email: registerInfo.email,
        hashPassword: hashPassword(registerInfo.password),
      },
      select: {
        id: true,
        avata: true,
        username: true,
        fullName: true,
        email: true,
        isActive: true,
        phoneNumber: true,
        point: true,
        roleId: true,
        createAt: true,
        updatedAt: true,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          //Unique contrain error
          console.log(error);
          error.message = "Email already exist";
        }
      }
    }
    throw error;
  }
  // const token = await VerifyTokenService.createToken(account.id);
  // sendMail.sendMailVerifyAccount(account.email, token.id);
  return account;
};
