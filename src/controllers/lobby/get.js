const fs = require('fs');

let lobbiesData;

export const getLobbies = (req, res) => {
    let rawdata = fs.readFileSync('./public/lobbies.json');
    lobbiesData = JSON.parse(rawdata);
    res.send(lobbiesData);
};

export const getLobbyById = (req, res) => {
    const itemId = req.params.id;
    try {
        const item = lobbiesData.data.find(_item => _item.id === itemId);
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