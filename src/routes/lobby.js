const express = require('express');
import { addLobby, getLobbies } from "../controllers/lobby";

const lobbyRouter = express.Router();

lobbyRouter.post('/', addLobby);
lobbyRouter.get('/', getLobbies);

export default lobbyRouter;