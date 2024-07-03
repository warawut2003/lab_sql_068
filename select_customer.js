const con = require('./connect');

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "select * from customers";

    con.query(sql,function(err,result,fields){
        if(err) throw err;
        console.log(result);
        result.forEach((row) => {
            console.log(`id:${row['id']},name:${row['name']},address:${row['address']}`);
        });
    });
});