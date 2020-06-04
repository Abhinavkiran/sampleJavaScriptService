var mysql = require('mysql');
exports.connection = mysql.createConnection({
  localhost: "3306",
  user: "root",
  password: "root",
  database: "mydb"
});