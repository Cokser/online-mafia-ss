const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const userController = require('./src/controllers/user');

import {initServer} from "./src/init";
import rootRouter from "./src/routes";

const app = express();

app.use(cors({
    exposedHeaders: ['Link']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: '^\x96\xee\xc1\xe2\xa0S\xff\x13\xee\x0b|\xc23&\xfeq\\r\x9f\x9cGtqS',
    saveUninitialized: true,
    resave: false
}));
app.use(passport.initialize({}));
app.use(passport.session({}));

app.use('/', rootRouter);

const port = 3200;

app.listen(process.env.APP_PORT, initServer);