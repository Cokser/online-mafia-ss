const express = require('express');
const rootRouter = express.Router();

import lobbyRouter from "./lobby";
import authRouter from "./auth";
import userRouter from "./users";

rootRouter.use('/lobby', lobbyRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;