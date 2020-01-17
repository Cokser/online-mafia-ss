import {knexClient} from "./initDB";

export const initServer = () => {
    knexClient();
    console.log('Started Successfully!');
};