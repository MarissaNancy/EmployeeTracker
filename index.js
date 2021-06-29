const inquirer = require('inquirer');
const mysql = require('mysql');
require('console.table');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_DB'
});

//gives choices and then the answer gets passed into switch stament and handles which code block will be executed
const employeeOpt = () => {
    inquirer
    .prompt({
        name: 'listoption',
        type: 'list',
        choices: [ 'Add department', 'Add role', 'Add employee', 'View Departments', 'View Roles', 'View Employees', 'Exit']
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
            case 'Exit':
                return exit();
        }
    })
};

//adding dept will prompt question and then with the answer make a connection query and insert it into db
const addDept = () => {
    inquirer
    .prompt({
        name: 'newDept',
        type: 'input',
        message: 'Enter new department name',
    })
    .then((answer) => {
        connection.query(
            'INSERT INTO departments SET ?',
        {
            name: answer.newDept,
        },
        (err) => {
            if (err) throw err;
            console.log('Your department was created successfully!');
            employeeOpt(); 
        }
        );
    })
};

//adding role will prompt questions and then then with the answers make a connection query and insert it into db
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
            'INSERT INTO roles SET ?',
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

//adding employee will prompt questions and then then with the answers make a connection query and insert it into db
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
        name: 'role',
        type: 'input',
        message: 'What is the role id?',
        },
        {
        name: 'manid',
        type: 'input',
        message: ' What is the manager id',
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO employees SET ?',
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

//viewing department will make a connection query and show results from db
const viewDep = () => {
    console.log('Pulling up department info...\n');
    connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res);
    employeeOpt();
    });
};
//do the console table 

//viewing employees will make a connection query and show results from db
const viewEmp = () => {
    console.log('Pulling up employees...\n');
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res);
        employeeOpt();
    }) 
};

//viewing roles will make a connection query and show results from db
const viewRoles = () => {
    console.log('Pulling up roles...\n');
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        employeeOpt();
    })
};


//we want all emps
// need to show a list of emps & we want to ask what emp to change role
// we need selected emp id
// we will need all roles now & show them a list of it so they can choose 
//then you will make the update query
// "UPDATE employee Set role_id = ? where employee_id = ?"
//
// const upDate = async () => {
//     //what role are you changin this employee to
//     //is going to update role id
//     //where cust is equal to 2
//     const employees = await connection.query('SELECT * FROM employees', (err, res) => {
//         if (err) throw err;
//     }) 
//     inquirer //put in a var
//     .prompt([
//         {
//         name: 'updateemp',
//         type: 'input',
//         message: 'Which employee do you want to change the role for?',
//         },
        
//     ])
// }

const exit = () => {
    process.exit();
};

employeeOpt();

connection.connect((err) => {
    if (err) throw err;
    console.log('Now listening');
})
