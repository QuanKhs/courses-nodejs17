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


