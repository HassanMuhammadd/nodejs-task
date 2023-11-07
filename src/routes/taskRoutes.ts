import {addTodoController, getTodosByIdController, getTodosController} from "../controllers/taskController";

const Router =require("express").Router;
const taskRouter = Router();

taskRouter.get("/",getTodosController);
taskRouter.get("/:id",getTodosByIdController);
taskRouter.post("/",addTodoController);

export default taskRouter;