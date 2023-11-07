import { Request, Response } from "express"
import {addTodo, getTodos, getTodosById} from "../services/taskService";
import {taskType} from "../types/taskType";
import {userType} from "../types/userType";
import {getUsers} from "../services/userService";

const getTodosController = async (req:Request, res:Response) => {
	try{
		const todos = await getTodos();
		res.status(200).json({Message:"Success",Data:todos});
	}
	catch(err)
	{
		res.status(500).json({Message:"Error",Data:err});
	}
}
const getTodosByIdController = async (req:Request,res:Response)=>{
	try{
		const id = Number(req.params.id);
		const todos = await getTodosById(id);

		if(!todos)
			throw new Error("No user with this ID");

		res.status(200).json({Message:"Success",Data:todos});
	}
	catch(err:any){
		res.status(500).json({Message:err.message});
	}
}

const addTodoController = async(req:Request,res:Response)=>{
	try{
		const todo = req.body.todo as taskType;
		const id = req.body.id;
		todo.userId = req.body.id;

		if(!id || getUsers().find((user:userType)=>user.id === Number(id)) === undefined)
			throw new Error("No user with this ID")

		if(todo.id === undefined)
			throw new Error("Task ID is required")

		await addTodo(todo,Number(id));

		res.status(201).json({Message:"Added successfully"});
	}
	catch(err:any){
		res.status(500).json({Message:err.message});
	}
}

export {getTodosController,getTodosByIdController,addTodoController}