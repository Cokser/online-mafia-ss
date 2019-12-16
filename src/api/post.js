const fs = require('fs');
import {get} from "./get";


export const post = (url, body, cb) => {
    get(url, (data) => {
        const newData = JSON.stringify({data: [...data, body]});
        fs.writeFile(url, newData, (err) => {
            if (err) throw err;
            cb();
        });
    });
};
