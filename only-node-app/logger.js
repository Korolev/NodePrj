/**
 * Created by mk
 * Date: 6/4/13
 * Time: 10:59 AM
 */
module.exports = function(module){
  return function(/* ... */){
    var args = [module.filename].concat([].slice.call(arguments));
    console.log.apply(console, args);
  }

};