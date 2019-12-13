const fs = require('fs');

let lobbiesData;

export const getLobbies = (req, res) => {
    let rawdata = fs.readFileSync('./public/lobbies.json');
    lobbiesData = JSON.parse(rawdata);
    res.send(lobbiesData);
};

export const getLobbyById = (req, res) => {
    let rawdata = fs.readFileSync('./public/lobbies.json');
    lobbiesData = JSON.parse(rawdata);
    const itemUrl = req.params.url;
    try {
        const item = lobbiesData.data.find(_item => _item.url === itemUrl);
        if (item) {
            res.send(item);
        } else {
            res.status(404).send({ message: `lobby: "${itemUrl}" doesn't exist`})
        }
    }
    catch (e) {
        console.log('ERROR: ', e.message);
    }
};