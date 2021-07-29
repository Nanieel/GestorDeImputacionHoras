create database TimeManager;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(50) NOT NULL UNIQUE,
    password varchar(50) NOT NULL,
    name varchar(25) NOT NULL,
    last_name varchar(35) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (email, password, name, last_name)
VALUES ('admin', 'admin', 'Admin' ,'Admin');

CREATE TABLE months (
    month_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL UNIQUE,
    days int(31) NOT NULL,
    PRIMARY KEY (month_id)
);

INSERT INTO months (name,days)
VALUES('January',31),('February',28),('March',31),('April',30),('May',31),('June',30),
      ('July',31),('August',31),('September', 30),('October',31),('November',30)('December',31);


CREATE TABLE proyects (
    proyect_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL UNIQUE,
    PRIMARY KEY (proyect_id)
);

INSERT INTO proyects (name)
VALUES ('test');