const fs = require('fs');

export const addUser = (req, res) => {
    const newUser = {
        id: 'tt0110359',
        name: 'Mike',
        department: 'English',
    };
    let usersData;

    try {
        let rawdata = fs.readFileSync('./public/users.json');
        usersData = JSON.parse(rawdata);
        usersData.data.push(newUser);
        let newData = JSON.stringify(usersData);
        fs.writeFileSync('./public/users.json', newData);
        res.end();
    }
    catch (e) {
        console.log(e.message);
    }
};