var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"my_db"
});

var sql ="create table if not exists Customers(id int auto_increment primary key,name varchar(20) NOT NULL,address varchar(100));";

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Create table successfully");
    });
});
