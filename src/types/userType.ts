import {taskType} from "./taskType";

export type userType = {
	id:number,
	name:string,
	phone:string,
	age:number,
	todos:taskType[],
}