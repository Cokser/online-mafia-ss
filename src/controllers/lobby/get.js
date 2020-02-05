const Lobby = require('../../models/lobby');

export const getLobbies = async (req, res) => {
    try {
        const lobbies = await Lobby.query();
        return res.json(lobbies);
    } catch(e) {
        console.log('ERR:', e);
    }
};

export const getLobbyById = async (req, res) => {
    try {
        const itemId = req.params.id;
        const lobbyById = await Lobby.query()
            .select('url')
            .where('url', itemId);
        if (lobbyById[0]) {
            return res.json(lobbyById[0]);
        } else {
            return res.status(404)
                .send({ message: `lobby - "${itemId}" doesn't exists`})
        }
    } catch(e) {
        console.log('ERR:', e);
    }
};