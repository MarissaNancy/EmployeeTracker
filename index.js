const inquirer = require('inquirer');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_DB'
});


const employeeOpt = () => {
    inquirer
    .prompt({
        name: 'listoption',
        type: 'list',
        choices: [ 'Add department', 'Add role', 'Add employee', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Role']//add exit for user?
    }) 
    .then((answer) => {
        switch (answer.listoption){
            case 'Add department':
                return addDept();
            case 'Add role':
                return addRole();
            case 'Add employee':
                return addEmp();
            case 'View Departments':
                return viewDep();
            case 'View Roles':
                return viewRoles();
            case 'View Employees':
                return viewEmp();
            case 'Update Employee Role':
                return changeErole();
        }
    })
};

const addDept = () => {
    // console.log('This function works!');
    inquirer
    .prompt({
        name: 'newDept',
        type: 'input',
        message: 'Enter new department name',
    })
    .then((answer) => {
        connection.query(
            'INSERT INTO department SET ?',
        {
            department_name: answer.newDept,//what the user typed in
        },
        (err) => {
            if (err) throw err;
            console.log('Your department was created successfully!');
            employeeOpt(); 
        }
        );
    })
};

const addRole = () =>{
    inquirer
    .prompt([
        {
        name: 'newRole',
        type: 'input',
        message: 'Enter new role title',
        },
        {
        name: 'salary',
        type: 'input',
        message: 'Enter Salary',
        },
        {
        name: 'deptid',
        type: 'input',
        message: 'What department ID does this employee belong to? ',
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO role SET ?',//
            {
            title: answer.newRole,
            salary: answer.salary,
            department_id: answer.deptid,
            },
            (err) => {
                if (err) throw err;
                console.log('Your role was created successfully!');
                employeeOpt();
            }
            );
    });
};
const addEmp = () =>{
    inquirer
    .prompt([
        {
        name: 'firstname',
        type: 'input',
        message: 'Enter employee first name',
        },
        {
        name: 'lastname',
        type: 'input',
        message: 'Enter employee last name',
        },
        {
        name: 'role',//
        type: 'input',
        message: 'What is the role id?',//
        },
        {
        name: 'manid',
        type: 'input',
        message: ' What is the manager id',//
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO employee SET ?', //
            {
            first_name: answer.firstname,
            last_name: answer.lastname,
            role_id: answer.role,
            manager_id: answer.manid
            },
            (err) => {
                if (err) throw err;
                console.log('Employee added successfully!');
                employeeOpt();
            }
            );
    });
}

// viewDep = () =>{
    
//     employeeOpt();
// };

const viewDep = () => {
    console.log('Pulling up department info...\n');
    connection.query('SELECT * FROM departments', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
    });
  };

viewEmp = () =>{
    employeeOpt();
};

changeErole = () =>{
    employeeOpt();
}
// //const addEmployee
// //inquirer prompt
// //.then answer and connection query  
// //insert into employee table


employeeOpt();

connection.connect((err) => {
    if (err) throw err;
    console.log('Now listening');
})