import { Router } from "express";
import { userController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/users", userController.getAllUsers);
userRouter.get("/users/:id", userController.getUserById)
userRouter.post("/users", userController.createUser)
userRouter.patch("/users/:id", userController.updateUser)
userRouter.delete("/users/:id", userController.deleteUser)


export default userRouter