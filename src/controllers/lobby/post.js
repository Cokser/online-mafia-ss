const uuid = require('uuid/v4');
import {post} from "../../api/post";


export const addLobby = (req, res) => {
    try {
        const newLobby = {
            title: req.body.title,
            private: req.body.private,
            description: req.body.description,
            streaming_mode: req.body.streaming_mode,
            mode: req.body.mode,
            id: uuid(),
            utc_started: new Date().getTime(),
            url: (~~(Math.random()*1e8)).toString(16),
        };
        post('./public/lobbies.json', newLobby, () => {
            res.send(newLobby.url);
        });
    }
    catch (e) {
        console.log(e.message);
    }
};