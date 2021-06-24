const inquirer = require('inquirer');

//this will contain the inquiery

function employeeOpt (){
    inquirer.prompt({
        name: 'listoption',
        type: 'list',
        choices: [ 'Add department', 'View department', 'Update employee role']
    }) .then((answer) =>{
        switch (answer.listoption){
            case 'Add department':
                return addDept();
            case 'View department':
                return viewDept();
        }
    })
};

function addDept(){
    console.log('This function works!');
    employeeOpt();
};


//use switch cases based on the options they choose it will send them to the func they choose 
//

//const addEmployee
//inquirer prompt
//.then answer and connection query  
//insert into employee table


employeeOpt();