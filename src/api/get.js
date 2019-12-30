const fs = require('fs');
let getData;
export const get = (url, cb) => {
    try {
        fs.readFile(url, (err, data) => {
            if (err) throw err;
            getData = JSON.parse(data);
            cb(getData);
        });
    }
    catch (e) {
        console.log(e);
    }
};
//
// export const getDataById = (url, id, cb) => {
//     fs.readFile(url, (err, data) => {
//         if (err) throw err;
//         getData = JSON.parse(data);
//         const item = getData.data.find(_item => _item.url === id);
//         cb(getData);
//         if (item) {
//             res.send(item);
//         } else {
//             res.status(404).send({ message: `lobby: "${itemUrl}" doesn't exist`})
//         }
//     });
// };