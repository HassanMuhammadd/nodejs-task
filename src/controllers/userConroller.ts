import { Request, Response } from "express"
import {addUser, getUsers} from "../services/userService"
import {userType} from "../types/userType";

const getUsersController =async (req:Request, res:Response) =>{

	try{
		const users = await getUsers();
		res.status(200).json({Message:"Success",Data:users});
	}
	catch(err)
	{
		res.status(500).json({Message:"Error"});
	}
}

const getUserByIdController = async(req:Request, res:Response) =>{
	try{

		const id = Number(req.params.id);
		const users = getUsers();
		const user = users.find((user)=>user.id === id);
		if(!user)
		throw new Error("No such user");
		res.status(200).json({Message:"Success",Data:user});
	}
	catch(err:any){
		res.status(500).json({Message:err.message});
	}
}
const addUserController = async (req:Request, res:Response) =>{

	try{
		const user = req.body as userType;

		if(!user)
		throw new Error("User is required");
		console.log(user.name,user.id);
		if(!user.id || !user.name )
			throw new Error("User ID and Name are required");

		if(getUsers().find((user:userType)=>user.id === Number(user.id)) !== undefined)
			throw new Error("User with this ID already exists");

			await addUser(user);
		res.status(201).json({Message:"User Added successfully"});
	}
	catch(err:any){
		res.status(500).json({Message:err.message});
	}
}

export {getUsersController, getUserByIdController, addUserController}