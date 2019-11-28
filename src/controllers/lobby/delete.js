const fs = require('fs');

export const deleteUser = (req, res) => {
    let usersData;
    try {
        let rawdata = fs.readFileSync('./public/lobbies.json');
        usersData = JSON.parse(rawdata);
        usersData.data.pop();
        let newData = JSON.stringify(usersData);
        fs.writeFileSync('./public/lobbies.json', newData);
        res.end();
    }
    catch (e) {
        console.log(e.message);
    }
};