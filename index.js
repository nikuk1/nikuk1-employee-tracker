const cTable = require('console.table');
const inquirer = require('inquirer');
const connection =require('./db/database.js');

//connect
connection.connect(err => {
if (err) throw err;
console.log('connected as id ' + connection.threadId);
afterConnection();
});