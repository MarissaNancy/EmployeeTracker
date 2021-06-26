-- Drops the employee_db if it already exists --
DROP DATABASE IF EXISTS employee_db;

-- Creates a database called employee_db --
CREATE DATABASE employee_db;

-- Uses newly created database --
USE employee_db;

-- Create a table called departments that includes these rows --
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Create a table called roles that includes these rows --
CREATE TABLE roles (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY (id)
);

-- Create a table called employees that includes these rows--
CREATE TABLE employees (
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10),
    PRIMARY KEY (id)
);

-- Creates new rows--

INSERT INTO departments (name)
VALUES ( "cleaning");

INSERT INTO roles (title, salary, department_id)
VALUES ( "artist", "20000", "1");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ( "nancy", "gonzalez", "1", "7");

