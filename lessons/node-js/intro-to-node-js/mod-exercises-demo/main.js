//Import in the entire math module
var math_mod = require('./math-module.js');
var string_mod = require('./strings-module.js');

//math_mod will be equal to the below object:
// {
//   add: add,
//   divide: divide,
//   multiply: function(a, b) {
//     return a * b
//   },
//   name: name,
//   arr: arr,
//   logTo10: logTo10
// }


//Both lines 4 and 6 below do the exact same thing
// var add_func = require('./math-module.js').add;
// { add: [Function: add] }
// var add_func = math_mod.add;

//Logging out the entire math module
console.log('Math mod:', math_mod);
//Logging out the add function
// console.log('Add func:', add_func);

//Two different ways of calling the same function
// console.log(add_func(7, 10));
console.log(math_mod.add(7, 10));

math_mod.mutliply(5, 10);
math_mod.divide(50, 10);
math_mod.square(5);
