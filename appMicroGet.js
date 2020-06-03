var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
var GetJsonData;
//app.use(bodyParser.urlencoded({ extended: true }));	
app.use(bodyParser.json());
//First middleware before response is sent

var con = mysql.createConnection({
  localhost: "3306",
  user: "root",
  password: "root",
  database: "mydb"
});

app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/userdetails', function(req, res, next){
   var sql = "select * from customers";
    con.query(sql, function (err, result) {
	  GetJsonData=JSON.stringify(result);
    if (err) throw err;
    console.log("query executed");
  });
   res.header("Content-Type", "application/json");
   res.send(GetJsonData);
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
   con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("Table created");
	console.log("Got a POST request for the homepage");
   res.send('Data inserted successfully');
  });
}
else{
	res.send('Please Insert post data in request payload');
}
})


app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);