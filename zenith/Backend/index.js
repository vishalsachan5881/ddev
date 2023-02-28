// import './database'
const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser')
const port = 3001;
const app = express()
var cors = require('cors')
app.use(cors())
const database = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Vishal@5881',
    database:'localAndes'
})


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

function getParam(hootHref) {
    const array = hootHref.split('/')
    n = array.length
    ind_provider_id = array.indexOf('providers')
    ind_table_name = array.indexOf('tables')
     return [array[ind_provider_id+1], array[ind_table_name+1]];
}
app.post('/Onboard', (req, res)=>{
    // const hootHref = req.body.hootHref;
    // console.log(hootHref);
    // [provider_id, table_name] = getParam(hootHref);
    // console.log(provider_id, table_name);
    const fetchData = `select * from localAndes.db`;
    database.query(fetchData,(err, result)=>{
        console.log("hup");
        
        res.send(result);
    })
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


