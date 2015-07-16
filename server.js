var app = require('express')();
var body-parser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get conifguration file
var User = require('app/models/user'); // get user mongoose model

var port = process.env.PORT || 8080; // create, sign, and verify tokens
mongoose.connect(config.database); // connect to the database
app.use('secret', config.secret); // secret variable
