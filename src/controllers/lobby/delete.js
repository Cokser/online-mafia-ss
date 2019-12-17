const fs = require('fs');

export const deleteUser = (req, res) => {
    let usersData;
    try {
        fs.readFile('./public/lobbies.json', (err, data) => {
            if (err) throw err;
            usersData = JSON.parse(data);
            usersData.data.pop();
            let newData = JSON.stringify(usersData);
            fs.writeFile('./public/lobbies.json', newData, (err) => {
                if (err) throw err;
                res.end();
            });
        });
    }
    catch (e) {
        console.log(e.message);
    }
};