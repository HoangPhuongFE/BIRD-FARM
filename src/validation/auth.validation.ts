import { ValidationChain, body } from "express-validator";
import { PASSWORD_LENGTH } from "../config/validation.enum";

export const validationSignIn: ValidationChain[] = [
  body("email")
    .notEmpty()
    .withMessage("Email can not empty")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .notEmpty()
    .withMessage("Password can not empty")
    .isLength({ min: PASSWORD_LENGTH })
    .withMessage(`Password must be at least ${PASSWORD_LENGTH} characters`),
];

export const validationRegister: ValidationChain[] = [
  body("email")
    .notEmpty()
    .withMessage("Email can not empty")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .notEmpty()
    .withMessage("Password can not empty")
    .isLength({ min: PASSWORD_LENGTH })
    .withMessage(`Password must be at least ${PASSWORD_LENGTH} characters`),
  body("username").notEmpty().withMessage("Username can not empty"),
  body("fullName").notEmpty().withMessage("FullName can not empty"),
];
