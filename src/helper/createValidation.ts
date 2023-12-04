import { ValidationChain, check, validationResult } from "express-validator";
import RequestValidationError from "../error/requestValidationError";
import { NextFunction, Request, Response } from "express";

const createValidation = (check: ValidationChain[]) => {
  return [
    ...check,
    // Check for validation errors
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const validationError = errors.array();
        next(new RequestValidationError(validationError));
      } else {
        // No validation errors, proceed to the route handler
        next();
      }
    },
  ];
};

export default createValidation;
