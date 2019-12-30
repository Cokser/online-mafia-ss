import {insertIntoTable} from "../shared/utils/insertInto";

const {Client} = require('pg');

export const post = async (body, cb) => {
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });
    
    const queryString = insertIntoTable('public.lobbies', body);
    
    try {
        await client.connect();
        await client.query('BEGIN');
        await client.query(queryString);
        await client.query('COMMIT');
        cb();
    } catch (e) {
        console.log('catch', e);
        await client.query('ROLLBACK');
    } finally {
        await client.end();
    }
};
