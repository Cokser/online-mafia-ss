const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./src/controllers/user');
import lobbyRouter from './src/routes/lobby';
import usersRouter from './src/routes/users';

const app = express();

app.use(cors({
    exposedHeaders: ['Link']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/lobby', lobbyRouter);
app.use('/users', usersRouter);

const port = 3200;

app.listen(port);