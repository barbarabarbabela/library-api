import ValidationError from "../errors/validation-error";
import { User } from "../interfaces/user.interface";
import { userService } from "../services/user.service";
import users from "../users";
import { NextFunction, Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  res.status(200).send(users);
};

const getUserById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = userService.getUserById(Number(id));

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: User = req.body;

    if (!body.name || !body.email || !body.phone || !body.birthDate) {
      throw new ValidationError("Invalid input data");
    }

    const newUser = await userService.createUser(body);

    console.log(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const user = await userService.updateUser(Number(id), body);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    userService.deleteUser(Number(id));

    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

export const userController = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
