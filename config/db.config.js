const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tomas0523*',
  database: 'bizarre'
})

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};