const fs = require('fs');

let usersData;

export const getUsers = (req, res) => {
    let rawdata = fs.readFileSync('./public/users.json');
    usersData = JSON.parse(rawdata);
    res.send(usersData);
};

export const getUserById = (req, res) => {
    const itemId = req.params.id;
    try {
        const item = usersData.data.find(_item => _item.id === itemId);
        if (item) {
            res.json(item);
        } else {
            res.json({ message: `item ${itemId} doesn't exist`})
        }
    }
    catch (e) {
        console.log(e.message);
    }
};