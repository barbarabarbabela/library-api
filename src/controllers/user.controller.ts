import { User } from "../interfaces/user.interface";
import { userService } from "../services/user.service";
import users from "../users";
import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  res.status(200).send(users);
};

const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;

  const user = userService.getUserById(Number(id))

  res.status(200).send(user);
};

const createUser = (req: Request, res: Response) => {
  const body = req.body;


  userService.createUser(body)
  .then((data: User | Error) => {
    if (data instanceof Error) {
      return res.status(400).json({ message: data.message });
    }
    res.status(201).json({ message: "User succesfully created" });
  })
  .catch((error: unknown) => {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  });
};

const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  const user = userService.updateUser(Number(id), body)

  if(!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).json({ message: "User successfully updated" });
};

const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params
  
  const user = userService.deleteUser(Number(id))

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).json({ message: "User successfully deleted" });
}

export const userController = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
