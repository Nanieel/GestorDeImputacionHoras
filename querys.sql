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




CREATE TABLE timers (
	id_date int NOT NULL AUTO_INCREMENT,
    id_user int NOT NULL,
    date varchar(50) NOT NULL UNIQUE,
    ini_m time NOT NULL,
    fin_m time NOT NULL,
    ini_a time NOT NULL,
    fin_a time NOT NULL,
    PRIMARY KEY (id_date)
);


INSERT INTO timers (id_user, date, ini_m, fin_m, ini_a,fin_a)
VALUES ('2', '2022/09/15', '08:00' ,'13:00','15:00','17:00');

select * from timers

select * from timers where date like '%08%'
