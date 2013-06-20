/**
 * Created by mk
 * Date: 6/4/13
 * Time: 10:40 AM
 */

var phrases;

exports.connect = function(){
  phrases = require('./ru.json');
}

exports.getPhrase = function(name){
  if(!phrases[name]){
    throw new Error("Нет такой фразы:" + name);
  }else{
    return phrases[name];
  }
}
