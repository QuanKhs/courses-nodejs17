-- create database
CREATE DATABASE INSTAGRAM;
create database instagram_test;

-- delete database
drop database INSTAGRAM;
drop database if exists instagram_test;

-- use database
drop database if exists instagram;
create database instagram;
use instagram;

-- delete table 
drop table users;
drop table if exists users;

-- create table
create table users(
	id int,
    firstName varchar(255),
    lastName varchar(255),
    age int,
    birthday date
);

-- edit table column
alter table users
modify column firstName varchar(150),
modify column lastName varchar(150);

-- add column
alter table users 
add column roles varchar(100);

-- delete coluum
alter table users
drop column roles;

-- sql constraints 
alter table users 
modify column id int primary key auto_increment;

-- insert data
insert into users (id, firstName, lastName, age, birthday, roles)
value (1, 'Quan', 'Pham', 22, '1988-10-30', 'admin'),
	  (2, 'Vuong', 'Pham', 22, '1988-03-23', 'user'),
	  (3, 'Thuan', 'La', 22, '1988-07-21', 'admin');

-- sql constraints 
alter table users 
modify column id int primary key auto_increment;

alter table users 
modify column age int not null,
modify column roles varchar(100) default 'user';

insert into users (firstName, lastName, age, birthday, roles)
value ('Quan', 'Pham', 22, '1988-10-30', 'admin'),
	  ('Vuong', 'Pham', 22, '1988-03-23', 'user'),
	  ('Thuan', 'La', 22, '1988-07-21', 'admin');

-- exercise
create table comments(
	id int primary key not null auto_increment,
    content text,
    createAt timestamp
);

insert into comments (content, createAt)
value ('hi! how are you', CURRENT_TIMESTAMP()),
      ('thanks! Im good', CURRENT_TIMESTAMP());

insert into comments (content, createAt)
value ('What are you looking for?', CURRENT_TIMESTAMP());
