const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port:'',
    user: 'root',
    password:'password',
    database:'', //fill in port also
}); 