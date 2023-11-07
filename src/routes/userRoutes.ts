import {addUserController, getUserByIdController, getUsersController} from "../controllers/userConroller";

const Router =require("express").Router;
const userRoutes = Router();

userRoutes.get("/",getUsersController);
userRoutes.get("/:id",getUserByIdController);
userRoutes.post("/",addUserController);

export default userRoutes;