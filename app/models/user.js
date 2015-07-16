var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean
}));
