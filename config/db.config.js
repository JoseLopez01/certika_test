"use strict";

const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'certika_test'
});

dbConnection.connect(
  err => {
    if (err) throw err;
    console.log('Successful connected');
  }
);

module.exports = dbConnection;
