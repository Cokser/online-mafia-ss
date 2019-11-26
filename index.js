import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as userController from "./src/controllers/userController";

const path = require('path');

const rootDir = require('./utils/path');


const app = express();

app.use(cors({
    exposedHeaders: ['Link']
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use("/users/create", userController.addUser);
app.use("/users", userController.getUsers);

const port = 3200;

app.listen(port);