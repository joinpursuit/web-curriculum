// var logHello = require('./module-1.js').logHello;
// var logHello = require('./module-1.js').logHello;
// var logGoodbye = require('./module-1.js').logGoodbye;
var mod1 = require('./module-1.js');
var obj = {
  logHello: require('./module-1.js').logHello,
  logGoodbye: require('./module-1.js').logGoodbye
}




// console.log('MOD 1:',mod1);
//
// console.log(mod1.test);

obj.logHello();
obj.logGoodbye();





// logHello();

// var arr = ['dog', 'cat', 'dog', 'rabbit'];
// console.log(mod.allIndexesOf(arr, 'dog'));
// console.log(mod.randomVal(arr));
// console.log(mod.randomVal(arr));
// console.log(mod.randomVal(arr));
