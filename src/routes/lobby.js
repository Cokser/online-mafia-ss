const express = require('express');
import { addLobby, getLobbies, getLobbyById } from "../controllers/lobby";

const lobbyRouter = express.Router();

lobbyRouter.post('/', addLobby);
lobbyRouter.get('/', getLobbies);
lobbyRouter.get('/:url', getLobbyById);

export default lobbyRouter;