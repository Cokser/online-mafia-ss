import {get} from "../../api/get";


export const getLobbies = (req, res) => {
    get('./public/lobbies.json', (data) => res.send(data));
};

export const getLobbyById = (req, res) => {
    get('./public/lobbies.json',  (lobbiesData) => {
        const itemId = req.params.id;
        const item = lobbiesData.data.find(_item => _item.url === itemId);
        if (item) {
            res.send(item);
        } else {
            res.status(404).send({ message: `lobby: "${itemUrl}" doesn't exist`})
        }
    });
};