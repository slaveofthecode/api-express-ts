"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const users_json_1 = __importDefault(require("../../data/users.json"));
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
const users = users_json_1.default; // "as UserEntry[]" Type assertion to avoid type errors
const getUsers = () => users;
const getUsersWithoutGenderInfo = () => {
    return users.map(({ id, name, salary, salaryCurrency }) => {
        return { id, name, salary, salaryCurrency };
    });
};
const getUserById = (id) => {
    return users.find((u) => u.id === id);
};
exports.userService = {
    getUsers,
    getUsersWithoutGenderInfo,
    getUserById
};
