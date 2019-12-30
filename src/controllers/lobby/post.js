const uuid = require('uuid/v4');
import {post, postDatabase} from "../../api/post";


export const addLobby = async (req, res) => {
    const newLobby = {
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
    };
    await post(newLobby, () => {
        res.send(newLobby.url);
    });
};