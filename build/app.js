"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const express = require("express");
const app = express();
app.use(express.json());
app.use("/users", userRoutes_1.default);
app.use("/todo", taskRoutes_1.default);
app.listen(3000, () => {
    console.log("listening to port 3000");
});
