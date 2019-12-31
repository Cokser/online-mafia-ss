const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const userController = require('./src/controllers/user');

import {initServer} from "./src/init";
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

app.listen(process.env.APP_PORT, initServer);