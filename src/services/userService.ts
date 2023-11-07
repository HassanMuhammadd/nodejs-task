import {userType} from "../types/userType";

const users:userType[] = [
	{
		id:1,
		name:"hassan",
		phone:"01022024821",
		age:21,
		todos:[
			{
				id:1,
				type:"task 1",
				description:"first task in my todos",
				userId:1
			}
		]
	},
	{
		id:2,
		name:"hassan2",
		phone:"01022024821",
		age:21,
		todos:[],
	},
	{
		id:3,
		name:"hassan3",
		phone:"01022024821",
		age:21,
		todos:[],
	},
	{
		id:4,
		name:"hassan4",
		phone:"01022024821",
		age:21,
		todos:[],
	},
]


const getUsers = () :userType[]=>{
	return users;
}

const getUserById = (id:number) :userType | undefined =>{
	const user:userType | undefined = users.find((user)=>user.id === id) ;
	return user;
}

const addUser = (user:userType) =>{
	users.push(user);
}

export {getUsers,getUserById,addUser};