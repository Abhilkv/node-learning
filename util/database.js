const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-learning',
    password: 'Abhil@2015'
})   // creates a pool of connections for supporting multiple queries simultaneously 

module.exports = pool.promise();   // to handle the queries in async manner