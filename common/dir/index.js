"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = exports.singnInSchema = exports.signUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpSchema = zod_1.default.object({
    fullName: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8, "minimum length of password is 8")
});
exports.singnInSchema = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string().min(8)
});
exports.createBlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    published: zod_1.default.string()
});
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    published: zod_1.default.string(),
    id: zod_1.default.number()
});
