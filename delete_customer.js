const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "delete from customers where name = 'gear'";

    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table Delete");
    });
}); 