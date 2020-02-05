import {knexClient} from "../../init/initDB";

const { Model } = require('objection');

Model.knex(knexClient);

class Lobby extends Model {
    static get tableName() {
        return 'lobbies';
    }
}

module.exports = Lobby;