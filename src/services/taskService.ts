import {taskType} from "../types/taskType";
import {userType} from "../types/userType";
import {getUsers} from "./userService";

const getTodos = () :taskType[] => {
	const users:userType[] = getUsers();
	const todos:taskType[] = [];
	users.forEach((user)=>{
		user.todos.forEach((todo)=>{
			todos.push(todo);
		})
	})
	return todos;
}
const getTodosById = (id:number) :taskType[] | undefined => {
	const users = getUsers();
	const todos = users.find((user)=>user.id === id)?.todos;
	return todos;
}

const addTodo = (todo:taskType, id:number) => {
	const users = getUsers();
	users.forEach((user)=>{
		if(user.id === id){
			user.todos.push(todo);
		}
	})
}

export { getTodos, getTodosById, addTodo}