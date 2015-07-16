var app = require('express')();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get conifguration file
var User = require('app/models/user'); // get user mongoose model

var port = process.env.PORT || 8080; // create, sign, and verify tokens
mongoose.connect(config.database); // connect to the database
app.use('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// routes

app.get('/', function(req, res){
  res.send('Hello! This is the API at http://localhost:' + port + '/api');
});
