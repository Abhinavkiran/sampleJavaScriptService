var mysql = require('mysql');
var GetJsonData;
/* exports.connection = mysql.createConnection({
  localhost: "3306",
  user: "root",
  password: "root",
  database: "mydb"
});
 */
var connection = mysql.createConnection({
  localhost: "3306",
  user: "root",
  password: "root",
  database: "mydb"
});

function create_db(createTableQuery,Values){
	
}

function Delete_db(){
	
}

exports.Fetch_db = function(sql){
	connection.query(sql, function (err, result) {
	  GetJsonData=JSON.stringify(result);
    if (err) throw err;
    console.log("query executed");
  });
  return GetJsonData;
}