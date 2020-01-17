// require('knex')({
//     client: 'pg',
//     connection: {
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         port: process.env.DB_PORT,
//         database: process.env.DB_NAME,
//         password: process.env.DB_PASSWORD,
//     },
//     pool: { min: 0, max: 7 }
// });
//
// export class DBConnection {
//     constructor() {
//         this.countV = 1;
//         if (!this.connection) {
//             this.connection = null;
//         }
//     }
//    
//     get() {
//         return this;
//     };
//
//
//     count() {
//         this.countV++;
//     };
//
//     async init() {
//         this.connection = new Client({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             port: process.env.DB_PORT,
//             database: process.env.DB_NAME,
//             password: process.env.DB_PASSWORD,
//         });
//         await this.connection.connect();
//         console.log('Connected Successfully!');
//     };
//
//     async close () {
//         await this.connection.end();
//         console.log('Connection Closed!');
//     };
// }
//
// export const initDataBase = async () => {
//     const appDB = new DBConnection;
//     await appDB.init();
// };

const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];

export const knexClient = require('knex')(config);