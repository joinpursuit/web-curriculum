var string_mod = require('./strings-module.js');

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function square(a) {
  return a * a;
}

function logTo10() {
  for(var i = 0; i < 10; i++) {
    console.log(i);
  }
}


var name = 'Nate'

var arr = [1, 2, 3 ,4]


//
// var person = {
//   name: 'Whatever',
//   eye_color: 'brown',
//   speak: function() {
//     console.log('hello')
//   }
// }

module.exports = {
  add: add,
  divide: divide,
  multiply: function(a, b) {
    return a * b
  },
  name: name,
  arr: arr,
  logTo10: logTo10
}
