const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

client.connect()
    .then(() => console.log('connected successfully!'))
    .finally(() => client.end());

const userController = require('./src/controllers/user');
import lobbyRouter from './src/routes/lobby';
import usersRouter from './src/routes/users';

const app = express();

app.use(cors({
    exposedHeaders: ['Link']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'moprojectsecret',
    saveUninitialized: false,
    resave: false
}));

app.use('/lobby', lobbyRouter);
app.use('/users', usersRouter);

const port = 3200;

app.listen(process.env.APP_PORT);