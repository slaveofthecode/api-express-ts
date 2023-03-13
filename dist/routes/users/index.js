"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../../services/users");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const data = users_1.userService.getUsersWithoutGenderInfo();
    res.send(data);
});
router.get('/:id', (req, res) => {
    const id = +req.params.id;
    const user = users_1.userService.getUserById(id);
    user != null
        ? res.send(user)
        : res.status(404).send('User not found');
});
router.post('/', (_req, res) => {
    res.send('Was created a new user');
});
exports.default = router;
