const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    con.query("drop table customers",function(err,result){
        if(err) throw err;
        console.log("Table Delete");
    });
});