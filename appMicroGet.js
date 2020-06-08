var express = require('express');
var app = express();
const bodyParser = require('body-parser');
//var con= require('./db_connection');
var controlOperations=require('./MicroGetController.js');
var url = require('url');
var GetJsonData;
//app.use(bodyParser.urlencoded({ extended: true }));	
app.use(bodyParser.json());
//First middleware before response is sent

/**var con = mysql.createConnection({
  localhost: "3306",
  user: "root",
  password: "root",
  database: "mydb"
});*/

app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/userdetails', function(req, res, next){
   /**var sql = "select * from userDetails";
    con.connection.query(sql, function (err, result) {
	  GetJsonData=JSON.stringify(result);
    if (err) throw err;
    console.log("query executed");
  });
   res.header("Content-Type", "application/json");
   res.send(GetJsonData);*/
   var responseOfGet=controlOperations.Fetch();
   res.header("Content-Type", "application/json");
   res.send(responseOfGet);
   next();
});

//Route handler

app.post('/create',(req, res) => { 

   console.log(req.body);
   var sql="INSERT INTO userDetails (firstname, lastname, email, phone) VALUES ?";
   var requestJsonBody= req.body;
   //console.log(requestJsonBody.firstname);
   console.log(requestJsonBody.firstname && requestJsonBody.lastname);
if(requestJsonBody.firstname && requestJsonBody.lastname && requestJsonBody.email && requestJsonBody.mobile){
   var values=[[requestJsonBody.firstname,requestJsonBody.lastname,requestJsonBody.email,requestJsonBody.mobile]];
   con.connection.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("Table created");
	console.log("Got a POST request for the homepage");
   res.status(201).end('Data inserted successfully');
  });
}
else{
	//res.send('Please Insert post data in request payload');
	res.status(400).end('Please give right request');
}

})

	
app.delete('/del_user', function (req, res) {
	console.log("Got a DELETE request for /del_user");
   //res.send('Hello DELETE');
	var q = url.parse(req.url,true).query;
	console.log(q.firstname);
	var sqlDeleteUser= "DELETE from userDetails where firstname = ?";
	var value=[[q.firstname]];
	con.connection.query(sqlDeleteUser,[value], function (err, result) {	  
    if (err) throw err;
    console.log("query executed");
  });
   console.log("Got a DELETE request for /del_user");
   res.status(204).end('User deleted');
   //res.status(204).end();
   //res.send('user deleted');
});



app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);