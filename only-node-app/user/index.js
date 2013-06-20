var db = require('../db'),
  log = require('../logger.js')(module);

function User(name){
  this.name = name;
}

User.prototype.hello = function(who){
  log(db.getPhrase('Hello')+", " + who.name);
}
module.exports = User;