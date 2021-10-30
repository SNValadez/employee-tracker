const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

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

inquirer
  .prompt([
    { 
        message: "What would you like to do?",
        name: "Initial query",
        type: "list",
        choices: ["View Employees", "View Employees By Department", 
                  "View Employees By Role", "Update an Employee", "Add an Employee",
                   "Add a Department", "Add a Role"]
    },
  ])
  .then((answers) => {
    //add switch case, 
    // if view employees is chosen, call on view all employees function.
    switch (answers) {
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

  // view all employees function, use javascript to hook into mysql