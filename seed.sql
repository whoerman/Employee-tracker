-- DROP DATABASE IF EXISTS employeeTracker_db;
-- CREATE DATABASE employeeTracker_db;
-- USE employeeTracker_db;

-- CREATE TABLE department (
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   name VARCHAR(30),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE role (
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   title VARCHAR(30),
--   salary DECIMAL(10,2) NULL, 
--   department_id INT NULL,
--   PRIMARY KEY (id)
-- );

--  CREATE TABLE employee (
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   firstName VARCHAR(30),
--   lastname VARCHAR(30),
--   role_id INT NULL,
--   manager_id INT NULL,
--   PRIMARY KEY (id)
-- );

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");


INSERT INTO role (title, salary, department_id) 
VALUES ('Sales Lead', 76000.00, (SELECT id from department where name = "Sales")),
 ('Salesperson',56000.00, (SELECT id from department where name = "Sales")),
 ('Lead engineer',76000.00, (SELECT id from department where name = "Engineering")),
 ('Accountant',76000.00, (SELECT id from department where name = "Finance")),
 ('Lawyer',116000.00, (SELECT id from department where name = "Legal"));

INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ("William","Shakespeare", 2,3);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ("Franz","Kafka", 1,4);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ("Joseph","Conrad", 3,1);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ("Johann","Goethe", 2,2);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ("walter","Hoerman", 4,4);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ("Jennifer","lee", 3,1);