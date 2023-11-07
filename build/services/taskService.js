"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = exports.getTodosById = exports.getTodos = void 0;
const userService_1 = require("./userService");
const getTodos = () => {
    const users = (0, userService_1.getUsers)();
    const todos = [];
    users.forEach((user) => {
        user.todos.forEach((todo) => {
            todos.push(todo);
        });
    });
    return todos;
};
exports.getTodos = getTodos;
const getTodosById = (id) => {
    var _a;
    const users = (0, userService_1.getUsers)();
    const todos = (_a = users.find((user) => user.id === id)) === null || _a === void 0 ? void 0 : _a.todos;
    return todos;
};
exports.getTodosById = getTodosById;
const addTodo = (todo, id) => {
    const users = (0, userService_1.getUsers)();
    users.forEach((user) => {
        if (user.id === id) {
            user.todos.push(todo);
        }
    });
};
exports.addTodo = addTodo;
