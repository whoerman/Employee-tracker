const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "UNHBootCamp",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    employeeTrack();
});

function employeeTrack() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add an Employee",
                "Remove an Employee",
                "Update an Employee Role",
                "Update an Employee Manager",
                "Exit the Program",
                "Test a function",
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Employees by Department":
                    viewEmployeesbyDept();
                    break;

                case "View All Employees by Manager":
                    viewEmployeesbyManager();
                    break;

                case "Add an Employee":
                    addEmployee();
                    break;

                case "Remove an Employee":
                    removeEmployee();
                    break;

                case "Remove an Employee":
                    updateEmployeeRole();
                    break;

                case "Remove an Employee":
                    updateEmployeeManager();
                    break;

                case "Exit the Program":
                    endProgram();
                    break;

                case "Test a function":
                    makeEmployeeArray();
                    break;
            }
        });
};

function viewEmployees() {
    console.log("viewEmployees");
    connection.query("SELECT firstName, lastname, title, department.name, salary, manager_id FROM employee LEFT JOIN role ON (employee.role_id = role.id) LEFT JOIN department ON (role.department_id = department.id);", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        console.table(data);
        employeeTrack();
    });
};

function viewEmployeesbyDept() {
    console.log("viewEmployeesbyDept");
    connection.query(
        "SELECT firstName, lastname, title, department.name, salary, name FROM department " +
        "INNER JOIN role ON (department.id = role.department_id) " +
        "INNER JOIN employee ON (role.id = employee.role_id)", function (err, data) {

        if (err) {
            return res.status(500).end();
        }

        console.table(data);
        employeeTrack();
    });
};

function viewEmployeesbyManager() {
    console.log("viewEmployeesbyManager");
    connection.query("SELECT * FROM employee", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        console.table(data);
        employeeTrack();
    });
};

function addEmployee() {
    inquirer
        .prompt(
            [{
                    name: "firstNameInput",
                    type: "input",
                    message: "What is the employee's First name?"
                },
                {
                    name: "lastnameInput",
                    type: "input",
                    message: "What is the employee's last name?"
                }
            ])
        .then(function (result) {
            var query = connection.query(
                "INSERT INTO employee SET ?", {
                    firstName: result.firstNameInput,
                    lastname: result.lastnameInput
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " employee inserted!\n");
                    employeeTrack();
                }
            );
        })
};

function removeEmployee() {
    console.log("removeEmployee");
    connection.query("SELECT * FROM employee" , function(err,res) {
        const employees = res.map(function(employee) {
            return `${employee.firstName} ${employee.lastname}`
        })

        inquirer
        .prompt(
            [{
                name: "employeeName",
                type: "rawlist",
                message: "Which employee would you like to delete",
                choices: employees
            }])
        .then(function ({employeeName}) {
            connection.query(
                "DELETE FROM employee WHERE firstName =? AND lastname = ?", employeeName.split(" "),
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " employee deleted!\n");
                    employeeTrack();
                }
            );
        })
    } ) 
};

function makeEmployeeArray() {
    console.log("viewEmployees");
    connection.query("SELECT firstName, lastname FROM employee LEFT JOIN role ON (employee.role_id = role.id) LEFT JOIN department ON (role.depaertment_id = department.id);", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        console.table(data);
        console.log(lastname);
        employeeTrack();
    });
};


function updateEmployeeRole() {
    console.log("updateEmployeeRole");
    employeeTrack();
};

function updateEmployeeManager() {
    console.log("updateEmployeeManager");
    employeeTrack();
};

function endProgram() {
    console.log("endProgram");
    return process.exit();
};