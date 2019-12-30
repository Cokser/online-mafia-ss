import { addLobby } from "./post";
import {getLobbies, getLobbyById, getNewLobbies} from "./get";

module.exports = {
    addLobby,
    getLobbies: getNewLobbies,
    getLobbyById,
};