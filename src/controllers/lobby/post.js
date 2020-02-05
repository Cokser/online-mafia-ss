const uuid = require('uuid/v4');
const Lobby = require('../../models/lobby');


export const addLobby = async (req, res) => {
    try {
        const lobby = await Lobby.query()
            .insert({
                id: uuid(),
                author: 1231231,
                url: (~~(Math.random()*1e8)).toString(16),
                title: req.body.title,
                mode: req.body.mode,
                description: req.body.description,
                private: req.body.private,
                active: false,
                streaming_mode: req.body.streaming_mode,
                created_at: new Date().toUTCString(),
                utc_started: new Date().toUTCString(),
                last_login: new Date().toUTCString(),
            });
        return res.send(lobby.url);
    } catch(e) {
        console.log('ERR:', e);
        return res.status(404)
            .send({ message: `couldn't add lobby, check your data`})
    }
};