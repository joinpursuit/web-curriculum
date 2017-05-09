# Review

## Truthiness
The following evaluate to false, everything else is true.
```js
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
```

## Logical Operators
&& and || and ! are important.
In order for (A && B) to evaluate to true, both A and B need to be true.
In order for (A || B) to evaluate to true, only one needs to be true.
```js
(true && false) // false
(true && true) // true
(true || false) // true
(false || false) // false
```
## Loops
All loops have a condition and run a code block when that condition is true.
```js
for(var i = 1; i <= 10; i++) {
  console.log(i)
}
var i = 1
while(i <= 10) {
  console.log(i)
  i++
}
```
## Control Flow
### if...else if...else
```js
if() {
  //do thing
} else if {
  //do other thing
} else {
  // do other other thing
}
```
### switch...case
```js
switch (candy) {
  case "Skittles":
    console.log("Skittles are $1.50.");
    break;
  case "Reeses":
    console.log("Reeses are $1.25.");
    break;
  case "Twizzlers":
    console.log("Twizzlers are $2.00.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}
```
### `break`
Either stops an iteration or case evaluation

### `continue`
Continues on to the next iteration

## `return` vs. `console.log`
Return acts similarly to break. It stops the iteration and exits the function.
Console.log just spits stuff out to the console.

## Functions
Functions are a lot like vending machines. Vending machines receive input and output a snack. Similarly functions receive arguments and use those arguments to either perform a task or output something.

Two ways of making functions that we've covered:
```js
function newFunction() {
  // code block
}

var newFunction = function() {
  //code block
}
```

## Arguments
You have to be specific with arguments when defining functions. Inside of a function, you have access to a pre-made arguments variables that converts all the arguments to an array-like object. Check arguments using `Array.isArray()`.

## Exercises
[Exercises](w5d1_exercises.md)

## Challenges
[Tic Tac Toe](tictaetoe/README.md)
