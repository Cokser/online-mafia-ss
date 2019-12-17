const express = require('express');
import { addLobby, getLobbies, getLobbyById } from "../controllers/lobby";

const lobbyRouter = express.Router();

lobbyRouter.post('/', addLobby);
lobbyRouter.get('/', getLobbies);
lobbyRouter.get('/:id', getLobbyById);

export default lobbyRouter;