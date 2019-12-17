const express = require('express');
import {
    addUser,
    deleteUser,
    getUserById,
    getUsers,
} from "../controllers/user";

const userRouter = express.Router();

userRouter.post('/', addUser);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUser);

export default userRouter;