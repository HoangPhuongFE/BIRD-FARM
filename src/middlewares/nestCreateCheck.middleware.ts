import { Nest } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import PrismaService from "../services/prisma.service";
import { getUniqueConstraintColumn } from "../query/rawQuery";

const prisma = PrismaService.getInstance();

export default function nestCreateCheck() {
  return async (req: Request, res: Response, next: NextFunction) => {
    const nest = req.body;
    if (
      (await prisma.nest.findUnique({ where: { name: nest.name } })) != null
    ) {
      throw new Error(`Name is duplication`);
    }

    if (
      (await prisma.nest.findUnique({
        where: { birdFatherId: nest.fatherBird.connect.id },
      })) != null
    ) {
      throw new Error(`Bird Father is duplication`);
    }

    if (
      (await prisma.nest.findUnique({
        where: { birdFatherId: nest.motherBird.connect.id },
      })) != null
    ) {
      throw new Error(`Bird Mother is duplication`);
    }
    next();
  };
}
