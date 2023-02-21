// import './database'
const express = require('express')
const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Vishal@5881',
    database:'localAndes'
})

const app = express();
app.listen('3000', ()=>{
    console.log("server started in port 3000");
}).addListener

// provider_id
// provider_name
// table_name
// table_size

// create table db(
//     provider_id varchar(255) primary key,
//     provider_name varchar(255),
//     table_name varchar(255),
//     table_size int
// );