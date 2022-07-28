const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Math0623736244',
    database: 'db_mastercamp'
});

module.exports = db;