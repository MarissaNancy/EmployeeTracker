const inquirer = require('inquirer');
const { createConnection } = require('mysql');

// * Add departments, roles, employees

// * View departments, roles, employees//

// * Update employee roles


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
                return updateERole();
        }
    })
};

// const addDept = () => {
//     // console.log('This function works!');
//     inquirer
//     .prompt({
//         name: 'newDept',
//         type: 'input',
//         message: 'Enter new department name',
//     })
//     .then((answer) => {
//         connection.query(
//             'INSERT INTO department SET ?',
//         {
//             department_name: answer.item,//what the user typed in
//         },
//         (err) => {
//             if (err) throw err;
//             console.log('Your auction was created successfully!');
//             employeeOpt(); 
//         }
//         );
//     })
// };

// const addRole = () =>{
//     inquirer
//     .prompt([
//         {
//         name: 'newRole',
//         type: 'input',
//         message: 'Enter new role title',
//         },
//         {
//         name: 'salary',
//         type: 'input',
//         message: 'Enter Salary',
//         }
//     ])
//     .then((answer) => {
//         connection.query(
//             'INSERT INTO department SET ?',//
//             {
//             title: answer.item,
//             salary: answer.item,
//             },
//             (err) => {
//                 if (err) throw err;
//                 console.log('Your auction was created successfully!');
//                 employeeOpt();
//             }
//             );
//     });
// };
// const addEmp = () =>{
//     inquirer
//     .prompt([
//         {
//         name: 'firstname',
//         type: 'input',
//         message: 'Enter employee first name',
//         },
//         {
//         name: 'lastname',
//         type: 'input',
//         message: 'Enter employee last name',
//         },
//         {
//         name: 'role',//
//         type: 'input',
//         message: 'roleid',//
//         },
//         {
//         name: 'manid',
//         type: 'input',
//         message: 'managerid',//
//         }
//     ])
//     .then((answer) => {
//         connection.query(
//             'INSERT INTO SET ?', //
//             {
//             first_name: answer.item,
//             last_name: answer.item,
//             role_id: answer.item,
//             manager_id: answer.item
//             },
//             (err) => {
//                 if (err) throw err;
//                 console.log('Employee added successfully!');
//                 employeeOpt();
//             }
//             );
//     });
// }

// //const addEmployee
// //inquirer prompt
// //.then answer and connection query  
// //insert into employee table


employeeOpt();