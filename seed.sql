INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");


INSERT INTO role (title, salary, department_id) 
VALUES ('Sales Lead', 76000.00, (SELECT id from department where name = "Sales")),
 ('Salesperson',56000.00, (SELECT id from department where name = "Sales")),
 ('Lead engineer',96000.00, (SELECT id from department where name = "Engineering")),
 ('Engineer',76000.00, (SELECT id from department where name = "Engineering")),
 ('Accountant',76000.00, (SELECT id from department where name = "Finance")),
 ('Lawyer',116000.00, (SELECT id from department where name = "Legal"));

INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ('William','Shakespeare', (SELECT id from role where title = "Sales Lead"),3);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ('Franz','Kafka', (SELECT id from role where title = "Salesperson"),4);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ('Joseph','Conrad', (SELECT id from role where title = "Lead Engineer"),1);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ('Johann','Goethe', (SELECT id from role where title = "Accountant"),2);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ('Walter','Hoerman', (SELECT id from role where title = "Engineer"),2);
INSERT INTO employee (firstName, lastname, role_id, manager_id) VALUES ('Jennifer','Lee', (SELECT id from role where title = "Lawyer"), 2);