const fs = require('fs');
const uuid = require('uuid/v4');

export const addLobby = (req, res) => {
    let lobbyData;
    try {
        let rawdata = fs.readFileSync('./public/lobbies.json');
        const newLobby = {
            title: req.body.title,
            private: req.body.private,
            description: req.body.description,
            streaming_mode: req.body.streaming_mode,
            id: uuid(),
            utc_started: new Date().getTime(),
            url: `lobby_${(~~(Math.random()*1e8)).toString(16)}`,
        };

        lobbyData = JSON.parse(rawdata);
        lobbyData.data.push(newLobby);
        const newData = JSON.stringify(lobbyData);
        fs.writeFileSync('./public/lobbies.json', newData);
        res.end();
    }
    catch (e) {
        console.log(e.message);
    }
};