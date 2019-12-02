const fs = require('fs');
const uuid = require('uuid/v4');

export const addLobby = (req, res) => {
    let storedData;
    try {
        let rawdata = fs.readFileSync('./public/lobbies.json');
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

        storedData = JSON.parse(rawdata);
        storedData.data.push(newLobby);
        const newData = JSON.stringify(storedData);
        fs.writeFileSync('./public/lobbies.json', newData);
        res.send(newLobby.url);
    }
    catch (e) {
        console.log(e.message);
    }
};