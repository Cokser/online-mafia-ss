module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://bombit:bombit@localhost/modatabase',
        searchPath: ['knex', 'public'],
    },
    production: {
        client: 'pg',
        connection: 'postgres://bombit:bombit@localhost/modatabase',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        }
    }
};