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
            }
        });
};

function viewEmployees() {
    console.log("viewEmployees");
    connection.query("SELECT * FROM employee;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        console.table(data);
        employeeTrack();
    });
};

function viewEmployeesbyDept() {
    console.log("viewEmployeesbyDept");
    connection.query("SELECT * FROM employee;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        console.table(data);
        employeeTrack();
    });
};

function viewEmployeesbyManager() {
    console.log("viewEmployeesbyManager");
    employeeTrack();
};

function addEmployee() {
    console.log("addEmployee");
    employeeTrack();
};

function removeEmployee() {
    console.log("removeEmployee");
    employeeTrack();
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