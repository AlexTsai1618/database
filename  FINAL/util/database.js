const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: '107dba06',
    password: '0000'
});

module.exports = pool.promise();