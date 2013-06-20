var db = require('./db')
db.connect();

var User = require('./user/index'),
    log = require('./logger.js')(module);

function run(){
  var vasya = new User('Вася'),
    petya = new User('Петя');

  vasya.hello(petya);

  log(db.getPhrase('Run successful'));
}

if(module.parent){
  exports.run = run;
}else{
  run();
}