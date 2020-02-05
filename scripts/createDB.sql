-- Database: modatabase

-- DROP DATABASE modatabase;

CREATE DATABASE modatabase
    WITH 
    OWNER = bombit
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE modatabase
    IS 'new mafia online database';