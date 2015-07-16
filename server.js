var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get conifguration file
var User = require('./app/models/user'); // get user mongoose model

var port = process.env.PORT || 8080; // create, sign, and verify tokens
mongoose.connect(config.database); // connect to the database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev')); // use morgan to log requests to the console

app.get('/', function(req, res){
  res.send('Hello! This is the API at http://localhost:' + port + '/api');
});

app.get('/setup', function(req, res){
  var leon = new User({ // create a sample user
    name: 'Leon',
    password: 'password',
    admin: true
  });

  leon.save(function(err){ // save sample user
    if( err ) throw err;

    console.log('User saved successfully.');
    res.json({ success: true });
  });
});

var apiRoutes = express.Router(); // borrow the express router

// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// TODO: route middleware to verify a token

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res){
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res){
  User.find({}, function(err, users){
    res.json(users);
  });
});

app.use('/api', apiRoutes);

app.listen(port);
console.log('Express server listening on port: ' + port);
