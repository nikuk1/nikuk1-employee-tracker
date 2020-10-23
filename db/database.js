const cTable = require('console.table');
const mysql = require('mysql2');

//connect
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Practice321#',
    database: ''
  });

  module.exports = connection;

  //cannot get mysql to connect