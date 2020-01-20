import {checkAuth, loginAccount, logoutAccount, registerAccount} from "../controllers/auth";

const express = require('express');

const authRouter = express.Router();

authRouter.get('/', checkAuth);
authRouter.get('/register', registerAccount);
authRouter.get('/login', loginAccount);
authRouter.get('/logout', logoutAccount);

export default authRouter;