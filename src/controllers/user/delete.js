const fs = require('fs');

export const deleteUser = (req, res) => {
    let usersData;
    try {
        let rawdata = fs.readFileSync('./public/users.json');
        usersData = JSON.parse(rawdata);
        usersData.data.pop();
        let newData = JSON.stringify(usersData);
        fs.writeFileSync('./public/users.json', newData);
        res.end();
    }
    catch (e) {
        console.log(e.message);
    }
};