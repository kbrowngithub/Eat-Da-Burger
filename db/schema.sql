-- Drops the burgers_db if it exists currently, (only for dev purposes) --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the new burgers_db database --
CREATE DATABASE burgers_db;

-- Make it so all of the following code will affect the new burgers_db DB --
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);