import { Account, Prisma } from "@prisma/client";

export type SignIn = {
  email: string;
  password: string;
};

export function isSignIn(obj: any): obj is SignIn {
  return obj && typeof obj.email == "string" && typeof obj.password == "string";
}

export type AccountReturnInfo = Omit<Account, "hashPassword" | "isBan"> & {};

export type Register = Omit<Prisma.AccountCreateInput, "hashPassword"> & {
  password: string;
};
