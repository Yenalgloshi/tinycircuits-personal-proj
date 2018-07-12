DROP TABLE IF EXISTS tinyCircuits_users; 

CREATE TABLE IF NOT EXISTS tinyCircuits_users (
user_id serial primary key,
first_name varchar(20) not null,
last_name varchar(20) not null,
email varchar(60) not null,
password varchar(60) not null,
company varchar(60),
address varchar(60),
apt_num varchar(60),
city varchar(60),
country varchar(60),
state varchar(60),
zip integer,
phone integer
);


CREATE TABLE IF NOT EXISTS tinyCircuits_inv (
id serial NOT NULL,
name varchar(20) NOT NULL,
part_num INT NOT NULL,
price INT,
stock_qty INT,
description varchar(1000)
)