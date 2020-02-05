import {knexClient} from "../../init/initDB";

const { Model } = require('objection');

Model.knex(knexClient);

class User extends Model {
    static get tableName() {
        return 'account';
    }
}

module.exports = User;