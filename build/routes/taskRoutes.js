"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskController_1 = require("../controllers/taskController");
const Router = require("express").Router;
const taskRouter = Router();
taskRouter.get("/", taskController_1.getTodosController);
taskRouter.get("/:id", taskController_1.getTodosByIdController);
taskRouter.post("/", taskController_1.addTodoController);
exports.default = taskRouter;
