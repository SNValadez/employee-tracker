const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sn33k31000CD!',
  database: 'employees'
});

// connection.query(
//   "SELECT * FROM department",
//     function(err, results) {
//       //console.log(err);
//       //console.log(results);
//     }
// )

const viewEmployees = () => {
  connection.query(
    "SELECT * FROM employee",
      function(err, results) {
        console.log(err);
        console.table(results);
        beginPrompt();
      }
  )
};

const viewDepartment = () => {
  connection.query(
    "SELECT * FROM department",
      function(err, results) {
        console.log(err);
        console.log(results);
      }
  )
};

const viewRoles = () => {
  connection.query(
    "SELECT * FROM role",
      function(err, results) {
        console.log(err);
        console.log(results);
      }
  )
};
// let array = [{
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }];
// console.log(array);
// console.table(array);
// console.warn();
// console.error();

function beginPrompt() {
  inquirer
  .prompt([
    { 
        message: "What would you like to do?",
        name: "query",
        type: "list",
        choices: ["View Employees", "View Employees By Department", 
                  "View Employees By Role", "Update an Employee", "Add an Employee",
                   "Add a Department", "Add a Role"]
    },
  ])
  .then((answers) => {
    //add switch case, 
    // if view employees is chosen, call on view all employees function.
    console.log(answers);
    switch (answers.query) {
      case "View Employees": viewEmployees();
      break;

      case "View Employees By Department": viewDepartment();
      break;

      case "View Employees By Roles": viewRoles();
      break;

      case "Update an Employee": updateEmployee();
      break;

      case "Add an Employee": addEmployee();
      break;

      case "Add a Department": addDepartment();
      break;

      case "Add a role": addRole();
      break;
    }

  });
};

beginPrompt();
  // view all employees function, use javascript to hook into mysql