DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2) NULL, 
  depaertment_id INT NULL,
  PRIMARY KEY (id)
);

 CREATE TABLE employee (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30),
  lastname VARCHAR(30),
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


