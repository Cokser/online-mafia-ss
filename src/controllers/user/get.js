import {get} from "../../api/get";

export const getUsers = (req, res) => {
    get('./public/users.json', (data) => res.send(data));
};

export const getUserById = (req, res) => {
    const itemId = req.params.id;
    get('./public/users.json',  (usersData) => {
        const item = usersData.data
            .find(_item => _item.id === itemId);

        if (item) {
            res.send(item);
        } else {
            res.status(404).send({ message: `user: "${itemId}" doesn't exist`})
        }
    });
};