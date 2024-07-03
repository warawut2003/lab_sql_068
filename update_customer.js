const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "update customers set address ='Songkhla 866' where name = 'ta'";

    con.query(sql,function(err,result,fields){
        if(err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});