import userData from '../../data/users.json';
import { UserEntry, UserWithoutGenderInfoEntry } from '../../types';

// export const getAllUsers = (): Promise<User[]> => Promise.resolve(userData);

// export const getUserById = (id: number): Promise<User | undefined> => {
//     const user = userData.find((u) => u.id === id);
//     return Promise.resolve(user);
// }

// export const createUser = (newUser: User): Promise<User> => {
//     const id = Math.max(...userData.map((u) => u.id)) + 1;
//     newUser.id = id;
//     userData.push(newUser);
//     return Promise.resolve(newUser);
// }

const users: UserEntry[] = userData as UserEntry[]; // "as UserEntry[]" Type assertion to avoid type errors

const getUsers = (): UserEntry[] => users;

const getUsersWithoutGenderInfo = (): UserWithoutGenderInfoEntry[] => {
  return users.map(({ id, name, salary, salaryCurrency }) => {
    return { id, name, salary, salaryCurrency };
  });
};

const getUserById = (id: number): UserEntry | undefined => {
  return users.find((u) => u.id === id);
};

export const userService = {
  getUsers,
  getUsersWithoutGenderInfo,
  getUserById
};
