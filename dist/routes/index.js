"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const users_1 = __importDefault(require("./users"));
const example_1 = __importDefault(require("./example"));
exports.routes = {
    userRouter: users_1.default,
    exampleRouter: example_1.default
};
