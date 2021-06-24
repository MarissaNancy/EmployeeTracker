const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port:'',
    user: 'root',
    password:'password',
    database:'', //fill in port also
}); 


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});
