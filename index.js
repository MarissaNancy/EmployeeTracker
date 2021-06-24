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
        choices: [ 'Add department', 'View department', 'Update employee role']//add exit for user?
    }) 
    .then((answer) => {
        switch (answer.listoption){
            case 'Add department':
                return addDept();
            case 'View department':
                return viewDept();
            case 'Update employee role':
                return employeeUpdate();
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
//     }).then((answer) => {
//         connection.query(
//             'INSERT INTO auctions SET ?',
//             item_name: answer.item,//what the user typed in
//         },
//         (err) => {
//             if (err) throw err;
//             console.log('Your auction was created successfully!');
//     )}

//     employeeOpt();
// };


function viewDept(){
    console.log('This function works!');
    employeeOpt();
}

function employeeUpdate(){
    console.log('This function works!');
    employeeOpt();
}


//use switch cases based on the options they choose it will send them to the func they choose 
//

//const addEmployee
//inquirer prompt
//.then answer and connection query  
//insert into employee table


employeeOpt();