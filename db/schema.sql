DROP IF DATABASE EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOL
);

SELECT*FROM burgers;