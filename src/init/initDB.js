﻿const {Client} = require('pg');

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

export const initDatabase = async () => {
    await client.connect();
    console.log('connected successfully!');
    await client.end();
};