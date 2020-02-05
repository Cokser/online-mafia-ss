import {checkAuth, loginAccount, logoutAccount, registerAccount} from "../controllers/auth";

const express = require('express');

const authRouter = express.Router();

authRouter.post('/', checkAuth);
authRouter.post('/register', registerAccount);
authRouter.post('/login', loginAccount);
authRouter.post('/logout', logoutAccount);

export default authRouter;