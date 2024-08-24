import InternalError from "../errors/internal-error";
import NotFound from "../errors/not-found";
import { User } from "../interfaces/user.interface";
import users from "../users";

const getUserById = (id: number) => {
  const foundedUser = users.find((user) => user.id === Number(id));

  return foundedUser;
};

const createUser = async (data: User): Promise<User> => {
  try {
    const newUser: User = {
      ...data,
      id: users.length + 1,
    };

    users.push(newUser);

    return newUser;
  } catch (error) {
    throw new InternalError("Failed to create user");
  }
};

const updateUser = (id: number, body: User) => {
  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    throw new NotFound("User not found");
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  return users[index];
};

const deleteUser = (id: number) => {
  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    throw new NotFound("User not found");
  }

  delete users[index];
};

export const userService = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
