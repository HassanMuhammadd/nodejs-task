"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodoController = exports.getTodosByIdController = exports.getTodosController = void 0;
const taskService_1 = require("../services/taskService");
const userService_1 = require("../services/userService");
const getTodosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield (0, taskService_1.getTodos)();
        res.status(200).json({ Message: "Success", Data: todos });
    }
    catch (err) {
        res.status(500).json({ Message: "Error", Data: err });
    }
});
exports.getTodosController = getTodosController;
const getTodosByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const todos = yield (0, taskService_1.getTodosById)(id);
        if (!todos)
            throw new Error("No user with this ID");
        res.status(200).json({ Message: "Success", Data: todos });
    }
    catch (err) {
        res.status(500).json({ Message: err.message });
    }
});
exports.getTodosByIdController = getTodosByIdController;
const addTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = req.body.todo;
        const id = req.body.id;
        todo.userId = req.body.id;
        if (!id || (0, userService_1.getUsers)().find((user) => user.id === Number(id)) === undefined)
            throw new Error("No user with this ID");
        if (todo.id === undefined)
            throw new Error("Task ID is required");
        yield (0, taskService_1.addTodo)(todo, Number(id));
        res.status(201).json({ Message: "Added successfully" });
    }
    catch (err) {
        res.status(500).json({ Message: err.message });
    }
});
exports.addTodoController = addTodoController;
