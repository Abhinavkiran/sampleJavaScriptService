
var con= require('./db_connection');

function create(reqbody){

}

function Delete(queryparam){

}

exports.Fetch = function(){
var result_get = con.Fetch_db('select * from userDetails');
//console.log(result_get);
return result_get;
}