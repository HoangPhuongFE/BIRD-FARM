import { Result, ValidationError } from "express-validator";

class RequestValidationError extends Error {
  public errors: ValidationError[]; // Define the 'errors' property
  constructor(errors: ValidationError[]) {
    super("Request validation failed");
    this.name = "RequestValidationError";
    this.errors = errors;
  }
}

export default RequestValidationError;
