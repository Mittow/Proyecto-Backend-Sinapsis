var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 100,
    host : 'localhost' || process.env.HOST,
    database : 'BD'|| process.env.DATABASE,
    user : 'root' || process.env.USER,
    password : 'password' || process.env.PASSWORD,
    debug : false
});

module.exports = {
    query: async function(text){
        return new Promise((resolve,reject)=>{
            pool.query(text,function(err,result){
            if(err){
                console.log(err);
                reject(err);
            }
            resolve(result)
            })
        })
    }
}