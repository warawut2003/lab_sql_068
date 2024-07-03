const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "insert into customers (name,address) values('T-Dat','Nakhon 1/69'),('Peter','Pattani 889'),('Mook','Nakron 563'),('ta','Nakron 469'),('gear','Nakron 88')";

    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Customer Created.")
    })
});