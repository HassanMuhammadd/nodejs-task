import taskRouter from "./src/routes/taskRoutes";
import userRouter from "./src/routes/userRoutes";
const express = require("express");

const app = express();
app.use(express.json());

app.use("/users",userRouter)
app.use("/todo",taskRouter)

app.listen(3000,()=>{
	console.log("listening to port 3000");
})
