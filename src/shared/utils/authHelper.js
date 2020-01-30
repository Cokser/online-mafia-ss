const bcrypt = require('bcryptjs');

import {knexClient} from "../../init/initDB";

export const comparePass = (userPassword, databasePassword) => {
    return bcrypt.compareSync(userPassword, databasePassword);
};

export const createUser = (req) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    return knexClient('account')
        .insert({
            username: req.body.username,
            email: req.body.email,
            created_at: new Date(),
            last_login: new Date(),
            password: hash
        })
        .returning('*');
}