import {knexClient} from "./initDB";

export const initServer = () => {
    knexClient.queryBuilder();
};