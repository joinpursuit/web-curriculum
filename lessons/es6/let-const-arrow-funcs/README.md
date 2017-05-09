# Objectives
- Understand difference between `var`, `let`, and `const`
- Understand arrow function Basics

# Resources
- [let Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [const Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Arrow Functions Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Arrow Functions in Depth](http://exploringjs.com/es6/ch_arrow-functions.html)

# `let` and `const`
`let` and `const` are new ways of defining variables. They're very similar to `var` except for a few key differences:

`let` has block scoping, while `var` does not
`const` cannot be changed after it is defined, while `var` or `let` can be changed

For example:
```js
for(var i = 0; i < 10; i++) {
  console.log('In loop', i);
}

console.log('Outside of loop', i); //logs 10

for(let i = 0; i < 10; i++) {
  console.log('In loop', i);
}

console.log('Outside of loop', i); //error: i is not defined

const ten = 10;
ten = 11; //error: cannot reassign const
```
# Arrow Functions
Arrow functions are a shorthand way of writing functions in ES6. They also lexically bind `this`, or in other words, they do not create their own unique `this` value

Examples:
```js
//ES5
function add(a, b) {
  return a + b;
}
//ES6
let add = (a, b) => a + b;

//ES5
function capitalizeFirst(str) {
  var firstLetter = str.substring(0, 1).toUpperCase();
  return firstLetter + str.substring(1);
}
//ES6
let capitalizeFirst = str => {
  let firstLetter = str.substring(0, 1).toUpperCase();
  return firstLetter + str.substring(1);
}

//ES5
function doubleNums(nums) {
  return nums.map(function(num){
    return num * 2;
  })
}
//ES6
let doubleNums = nums => nums.map(num => num * 2);

//ES5
function Person() {
  var self = this; // Some choose `that` instead of `self`.
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

//ES6
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}
```
## Practice:
- [Arrow Functions Practice Exercises](arrow-functions-practice-exercises.md)
