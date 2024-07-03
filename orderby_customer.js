const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "select * from customers order by name";

    con.query(sql,function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});