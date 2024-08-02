import { User } from "../interfaces/user.interface";
import users from "../users";
import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  res.status(200).send(users);
};

const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;

  const foundedUser = users.find((user) => user.id === Number(id));

  res.status(200).send(foundedUser);
};

const createUser = (req: Request, res: Response) => {
  const body: Omit<User, "id"> = req.body;

  const newUser = {
    id: users.length + 1,
    ...body,
  };

  users.push(newUser);

  res.status(201).json({ message: "User succesfully created", user: newUser });
};

const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const body: Partial<User> = req.body;

  const userIndex = users.findIndex((user) => user.id === Number(id));

  users[userIndex] = {
    ...users[userIndex],
    ...body
  }

  res.status(200).json({ message: "User successfully updated", users });
};

const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params
  
  const userIndex = users.findIndex(user => user.id === Number(id))

  users.splice(userIndex, 1)

  res.status(200).json({ message: "User successfully deleted", users });
}

export const userController = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
