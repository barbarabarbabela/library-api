import { User } from "../interfaces/user.interface";
import users from "../users";

const getUserById = (id: number) => {
  const foundedUser = users.find((user) => user.id === Number(id));

  return foundedUser;
};

const createUser = async (data: User): Promise<User | Error> => {
  try {
    if (!data) {
      return new Error("Invalid input data");
    }

    const newUser: User = {
      ...data,
      id: users.length + 1,
    };

    users.push(newUser);

    return newUser
  } catch (error) {
    return new Error("Failed to create user");
  }
};

const updateUser = (id: number, body: User) => {
  const userIndex = users.findIndex((user) => user.id === Number(id));

  users[userIndex] = {
    ...users[userIndex],
    ...body
  }

  return userIndex || null
}

const deleteUser = (id: number) => {
  const userIndex = users.findIndex(user => user.id === Number(id))

  users.splice(userIndex, 1)

  return userIndex || null
}

export const userService = {
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
