"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userConroller_1 = require("../controllers/userConroller");
const Router = require("express").Router;
const userRoutes = Router();
userRoutes.get("/", userConroller_1.getUsersController);
userRoutes.get("/:id", userConroller_1.getUserByIdController);
userRoutes.post("/", userConroller_1.addUserController);
exports.default = userRoutes;
