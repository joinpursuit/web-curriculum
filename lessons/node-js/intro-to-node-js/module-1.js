var mod2 = require('./module-2.js');
var newVar  = 'this is atest'
var newVar2  = 'this is atest'
var newVar3  = 'this is atest'
var newVar3  = 'this is atest'

mod2.newFunc = function(){

}

function logHello() {
  console.log("Hello from module-1");
}

function logGoodbye() {
  console.log("Goodbye from module-1");
}


module.exports = {
  logHello: logHello,
  logGoodbye: logGoodbye,
  test: 'This is a test',
  arr: [1, 2, 3, 4],
  newVar: newVar,
  newVar2: newVar2,
};



// module.exports.logHello = logHello;
// module.exports.logGoodbye = logGoodbye;



// function Animal(){
//
// }
//
// Animal.prototype.speak = function(){
//
// }
//
// Animal.prototype = {
//   speak: function(){},
//   bark: function(){}
// }
