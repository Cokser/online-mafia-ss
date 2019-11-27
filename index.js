const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./src/controllers/user');

const app = express();

app.use(cors({
    exposedHeaders: ['Link']
}));

app.use(bodyParser.urlencoded({extended: false}));

app.post("/users/create", userController.addUser);
app.delete("/users/delete", userController.deleteUser);
app.get("/users/:id", userController.getUserById);
app.get("/users", userController.getUsers);

const port = 3200;

app.listen(port);