import { knexClient } from "../init/initDB";

export const get = (url, cb) => {
    try {
        console.log('lobbies???');
        knexClient
            .select('*')
            .from('lobbies')
            .then((data) => {
                console.log(data);
                cb(data)
            })
            .catch(e => console.log('knexClient catch ', e));
    }
    catch (e) {
        console.log('catch ', e);
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