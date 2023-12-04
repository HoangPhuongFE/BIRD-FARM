import { NextFunction, Request, Response } from "express";
import RequestValidationError from "../error/requestValidationError";
import { Prisma } from "@prisma/client";

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorTitle = "Something went wrong!\n";
  if (err instanceof RequestValidationError) {
    //handle for request validation error
    const validationErrors = err.errors
      .map((error) => {
        const e = err.name + ": " + error.msg;
        return e;
      })
      .join("\n"); // Format error messages
    return res.status(400).send(`${errorTitle}${validationErrors}`);
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    errorTitle = "Something went wrong in Prisma!\n";
    //NOTE - handle prisma error
    if (err.code === "P2025") {
      //QUery nor found error
      return res.status(500).send(`${errorTitle}${err}`);
    }
  }
  // Handle other types of errors here
  res.status(500).send(`${errorTitle}${err}`);
};

export default ErrorHandler;
