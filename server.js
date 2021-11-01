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
        console.table(results);
        beginPrompt();
      }
  )
};

const viewRoles = () => {
  connection.query(
    "SELECT * FROM role",
      function(err, results) {
        console.log(err);
        console.table(results);
        beginPrompt();
      }
  )
};


const addRole = () => { 
  connection.query("SELECT role.title AS title, role.salary AS salary FROM role",   
  function(err, results) {
    console.log(err);
    console.table(results);
    inquirer.prompt([
        {
          name: "title",
          type: "input",
          message: "What is the role title?"
        },
        {
          name: "salary",
          type: "input",
          message: "What is salary?"

        } 
    ]).then(function(results) {
        connection.query(
            "INSERT INTO role SET ?",
            {
              title: results.Title,
              salary: results.Salary,
            },
            function(err) {
                if (err) throw err
                console.table(results);
                beginPrompt();
            }
        )

    });
  });
  }
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
        choices: ["View Employees", "View Departments", 
                  "View Roles", "Update an Employee", "Add an Employee",
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

      case "View Departments": viewDepartment();
      break;

      case "View Roles": viewRoles();
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