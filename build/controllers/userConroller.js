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
exports.addUserController = exports.getUserByIdController = exports.getUsersController = void 0;
const userService_1 = require("../services/userService");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getUsers)();
        res.status(200).json({ Message: "Success", Data: users });
    }
    catch (err) {
        res.status(500).json({ Message: "Error" });
    }
});
exports.getUsersController = getUsersController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const users = (0, userService_1.getUsers)();
        const user = users.find((user) => user.id === id);
        if (!user)
            throw new Error("No such user");
        res.status(200).json({ Message: "Success", Data: user });
    }
    catch (err) {
        res.status(500).json({ Message: err.message });
    }
});
exports.getUserByIdController = getUserByIdController;
const addUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        if (!user)
            throw new Error("User is required");
        console.log(user.name, user.id);
        if (!user.id || !user.name)
            throw new Error("User ID and Name are required");
        if ((0, userService_1.getUsers)().find((user) => user.id === Number(user.id)) !== undefined)
            throw new Error("User with this ID already exists");
        yield (0, userService_1.addUser)(user);
        res.status(201).json({ Message: "User Added successfully" });
    }
    catch (err) {
        res.status(500).json({ Message: err.message });
    }
});
exports.addUserController = addUserController;
