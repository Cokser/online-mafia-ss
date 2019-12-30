CREATE TABLE lobbies(
                        id serial PRIMARY KEY,
                        author serial,
                        url VARCHAR (20) UNIQUE NOT NULL,
                        title VARCHAR (20) NOT NULL,
                        mode VARCHAR (20) NOT NULL,
                        description VARCHAR (355) NOT NULL,
                        private BOOLEAN,
                        active BOOLEAN,
                        streaming_mode BOOLEAN,
                        created_at TIMESTAMP NOT NULL,
                        utc_started TIMESTAMP NOT NULL,
                        last_login TIMESTAMP
);