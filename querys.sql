create database TimeManager;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(50) NOT NULL UNIQUE,
    password varchar(50) NOT NULL,
    name varchar(25) NOT NULL,
    last_name varchar(35) NOT NULL,
    PRIMARY KEY (id)
);