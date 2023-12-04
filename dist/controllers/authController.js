"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const prismaService_1 = __importDefault(require("../services/prismaService"));
const prisma = prismaService_1.default.getInstance();
//login
const login = async (req, res) => { };
exports.login = login;
//Register
const register = async (req, res) => { };
exports.register = register;
const AuthController = {
    login: exports.login,
    register: exports.register,
};
exports.default = AuthController;
