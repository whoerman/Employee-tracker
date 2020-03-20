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
            }
        });
};

function viewEmployees() {
console.log("viewEmployees")
};

function viewEmployeesbyDept() {
    console.log("viewEmployeesbyDept")

};

function viewEmployeesbyManager() {
    console.log("viewEmployeesbyManager")

};

function addEmployee() {
    console.log("addEmployee")

};

function removeEmployee() {
    console.log("removeEmployee")

};

function updateEmployeeRole() {
    console.log("updateEmployeeRole")

};

function updateEmployeeManager() {
    console.log("updateEmployeeManager")

}

