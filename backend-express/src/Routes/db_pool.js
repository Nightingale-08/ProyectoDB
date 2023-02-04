const Pool = require("pg-pool");
const {Router} = require("express")
const router = Router()
let config = require('./config.js')

/*
const pool = new Pool(config)
 

pool.on('error', (err, client) => {
    console.log(error('idle client error',err.message,err.stack))
})

//realiza las querys
function query(text,values,callback){
    console.log('query:',text,values);
    return pool.query(text, values, callback)
}

//para multiples operaciones, de un mismo cliente
function connect(callback){
    return pool.connect(callback);
}
 */




//module.exports = connect;