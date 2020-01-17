const {Client} = require('pg');
import {get} from "../../api/get";

const Lobby = require('../../models/lobby');

export const getNewLobbies = async (req, res) => {
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });
    try {
        await client.connect();
        console.log('connected successfully!');
        await client.query('BEGIN');
        const {rows} = await client.query(`SELECT * FROM public.lobbies`);
        console.log('lobbiesObj: ', rows);
        await client.query('COMMIT');
        res.send(rows);
    }
    catch (e) {
        console.log('catch:', e);
        await client.query('ROLLBACK');
    }
    finally {
        await client.end();
    }
};



export const getLobbies = async (req, res) => {
    try {
        const lobbies = await Lobby.query();
        return res.json(lobbies);
    } catch(e) {
        console.log('ERR:', e);
    };
};

export const getLobbyById = (req, res) => {
    get('./public/lobbies.json',  (lobbiesData) => {
        const itemId = req.params.id;
        const item = lobbiesData.data.find(_item => _item.url === itemId);
        if (item) {
            res.send(item);
        } else {
            res.status(404).send({ message: `lobby: "${itemId}" doesn't exist`})
        }
    });
};