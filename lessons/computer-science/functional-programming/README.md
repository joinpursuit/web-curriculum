# Intro to Functional Programming
## Table of Contents
1. [Why Functional Programming?](#why-functional-programming)
2. [What is Functional Programming?](#what-is-functional-programming)
3. [How to Use Functional Programming](#how-to-use-functional-programming)
4. [Resources](#resources)

# Why Functional Programming?
## A Brief History of JavaScript Paradigms
When JavaScript code started it was mostly imperative. In other words, it was mostly loops and variables that gave step by step instructions of how to do things:

[Source](https://www.sitepoint.com/introduction-functional-javascript/)

```js
var result;
function getText() {
  var someText = prompt("Give me something to capitalize");
  capWords(someText);
  alert(result.join(" "));
};
function capWords(input) {
  var counter;
  var inputArray = input.split(" ");
  var transformed = "";
  result = [];
  for (counter = 0; counter < inputArray.length; counter++) {
    transformed = [
      inputArray[counter].charAt(0).toUpperCase(),
      inputArray[counter].substring(1)
    ].join("");
    result.push(transformed);
  }
};
document.getElementById("main_button").onclick = getText;
```

As programs started getting more complicated, it started to become harder and harder to keep imperative programs well organized and maintainable. So Object Oriented Programming (OOP) was invented. In essence, OOP organizes everything into objects (using constructor functions, prototypes, and inheritance) to add more organization and structure to our code:

```js
(function() {
  "use strict";
  var SomeText = function(text) {
    this.text = text;
  };
  SomeText.prototype.capify = function(str) {
    var firstLetter = str.charAt(0);
    var remainder = str.substring(1);
    return [firstLetter.toUpperCase(), remainder].join("");
  };
  SomeText.prototype.capifyWords = function() {
    var result = [];
    var textArray = this.text.split(" ");
    for (var counter = 0; counter < textArray.length; counter++) {
      result.push(this.capify(textArray[counter]));
    }
    return result.join(" ");
  };

  document.getElementById("main_button").addEventListener("click", function(e) {
    var something = prompt("Give me something to capitalize");
    var newText = new SomeText(something);
    alert(newText.capifyWords());
  });
}());
```

OOP was definitely an upgrade over pure imperative programming, but it eventually also started running into issues. As OOP apps start getting bigger and bigger, objects start getting connected to more and more things (through protoypes) which means there are a ton of things we need to keep track of in our app. We end up with a web of complexity, where a bug in one object could effect a ton of other places in our code.

So along came functional programming, which basically uses functions to encapsulate small pieces of our code, rather than objects:

```js
(function() {
  "use strict";
  var capify = function(str) {
    return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  };
  var processWords = function(fn, str) {
    return str.split(" ").map(fn).join(" ");
  };
  document.getElementById("main_button").addEventListener("click", function(e) {
    var something = prompt("Give me something to capitalize");
    alert(processWords(capify, something));
  });
}());
```

## Object oriented vs functional
Object Oriented Programming and Functional Programming are two different programming styles that can be applied in many different languages. In fact, some programming languages are almost entirely object oriented (Java, Python, C++), while other are entirely functional (Haskell, Lisp, Elm).

Here's good way to think about the difference between the two:
- In object oriented programming we are writing an application that *contains* objects, which are used to call functions. In other words, our app contains our functions, and uses them where needed.
- In functional programming, our app *is* our functions. In other words, our app itself is made up of small, resuable functions, that we combine together to make a larger whole.

JavaScript is a pretty unique language in the sense that you can code JavaScript in either an object oriented or functional style. You can even mix and match, if you'd like.

## Advantages of functional programming
There are a bunch of advantages to functional programming. The biggest ones are:

- **Simplicity:** functional programming reduces state changes. Changing the state anywhere in our app (or depending on state anywhere outside of our app) inherently makes things more complicated because there are more dependencies and things that we need to rely on. Reducing state changes and mutability helps keep our apps a lot simpler.
- **Readability:** functional code is generally a lot more declarative than imperative. In other words, it's describes what the outcome should be instead of describing all of the individual steps. This makes your code more descriptive and easier to read. For more info check out Eloquent JavaScript's great description of declarative vs imperative programming in their intro to functional programming: [Eloquent JavaScript declarative vs imperative](http://eloquentjavascript.net/1st_edition/chapter6.html).
- **Reusability:**: small, pure functions can be easily combined together to form new, larger functions, without having to rewrite our code every time.
- **Testability**: functional programming is focused around the idea of small, pure, functions. This makes things very easy to test, since we can test each function individually
- **Predictability**: since we can test our code a lot more easily, and since our code is mostly immutable, it is a lot more predictable and stable


# What is functional programming?
Functional programming is based on two main principles: the ideas of no side effects, and pure functions. Let's take a closer look at each:

## No Side effects

A side effect is basically when a part of a function (other than its return value) mutates some part of the state. This can include:

- Changing the value of a variable
- Calling outside, unrelated functions
- Interacting with outside computer or people (AJAX calls, file writes, etc.)

In other words, functions that are free of side effects don't produce any observable output except for their return value.

## Pure Functions   

Given the exact same input, pure functions will always return the exact same output. Let's take a look at an example of a pure function:
```js
let add = (num1, num2) => num1 + num2;

//add is pure because given the same input it will always produce the same output.
//if we call `add(1, 2)` a million times it will always return 3 every single time:
add(1, 2); //3
add(1, 2); //3
add(1, 2); //3

//Similarly, if we call 'add(5, 9)' a million times we will always get 14, every single time:
add(5, 9); //14
add(5, 9); //14
add(5, 9); //14
```

Now let's look at an impure function:
```js
let num1 = 10;
let impureAdd = (num2) => num1 + num2;

//'impureAdd' will not always return the same output given the same input.
impureAdd(10); //20

//If num1 changes, impureAdd will produce different results:
num1 = 50;
impureAdd(10); //60
```

Pure functions are free of 'side-effects', and do not depend on any outside inputs or outputs.

Are the following functions pure or impure?

```js
var sum = 0;
function mystery1(a, b) {
  sum += a + b;
  return a + b;
}
```
<details>
<summary>Answer:</summary>
Impure
</details>

```js
var sum = 0;
function mystery2(a, b) {
  return a + b + 100;
}
```
<details>
<summary>Answer:</summary>
Pure
</details>

```js
var sum = 0;
function mystery3(a, b) {
  return a + b;
}
sum + = mystery3(10, 20);
```
<details>
<summary>Answer:</summary>
Pure
</details>

```js
var outerStr = '';
function mystery4(str) {
  if(outerStr.length > 10) {
    str += outerStr;
  }
  return str.toUpperCase();
}
```
<details>
<summary>Answer:</summary>
Impure
</details>

```js
var outerStr = '';
function mystery5(str) {
  return str.toUpperCase() + ' hello';
}
```
<details>
<summary>Answer:</summary>
Pure
</details>

```js
function mystery6(str) {
  $.ajax('google.com', function(data){
    console.log('data')
  })
  return str + ' hello';
}
```
<details>
<summary>Answer:</summary>
Impure
</details>

```js
function mystery7(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```
<details>
<summary>Answer:</summary>
Impure
</details>

```js
function mystery8(num) {
  return Math.random() + num;
}
```
<details>
<summary>Answer:</summary>
Impure
</details>

Question: Can every single one of our functions be completely pure?
<details>
<summary>Answer:</summary>
Not entirely...if every single one of our functions were pure, our app would not be able to do very much, because it would not be able to interact with the outside world. So you basically want to have as many pure functions as possible, and only make impure functions if it's absolutely necessary for your app.
</details>

# How to Use Functional Programming

Let's look at some strategies for putting functional programming to use in our everyday code:

## Small Functions, Single Responsibility

**"Do one thing and do it well"** - UNIX philosophy

Keeping your functions small helps you avoid accidental side effects, and just generally makes your code more readable, testable, and functional.

Let's look at an example. Say we need to take an array of strings, uppercase the first letter of each string, and remove all strings with the letter 'e' in them. We could potentially do this all in one large function:

```js
const upperCaseFirstAndRemoveEs = str => {
  let splitArr = str.split(' ');
  let filteredArr = splitArr.filter(str => str.indexOf('e') === -1).map(str => str.charAt(0).toUpperCase() + str.slice(1));
  return filteredArr.join(' ');
}

upperCaseFirstAndRemoveEs('this is a test string'); //"This Is A String"
```

Or we could break it into smaller functions, which each break down a small part of the problem:

```js
const splitStr = str => str.split(' ');
const removeWordsWithE = arr => arr.filter(str => str.indexOf('e') === -1);
const capitalizeFirstLetter = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
const joinArr = arr => arr.join(' ');

joinArr(capitalizeFirstLetter(removeWordsWithE(splitStr('this is a test string')))); //"This Is A String"
```
There are a few advantages the second approach:
- The code is a lot more testable: we can test each function individually
- The code is more reusable: we can combine these small functions with other functions to create new operations
- The code is a lot easier to reason about: each part is broken down into a small, bite-size sitepoint
- The code is more readable: if you read the function calls (starting from the innermost function, so reading from righ to left) there's a clear description of what will happen: 'splitStr' -> 'removeWordsWithE' -> 'capitalizeFirstLetter' -> 'joinArr'

## Composability

This is the basic idea behind a functional concept called 'composability', which basically means combining your small functions together to create larger functions.

However chaining all of those function calls together and having to keep track of so many parenthesis can quickly get confusing. So to fix that problem, we can create a `compose` function, that takes in all our functions as arguments and returns a new function that combines them all:

```js
const compose = (...funcs) => arg => funcs.reduce((cummulativeVal, func) => func(cummulativeVal), arg);

const removeEwordsAndCapitalizeFirst = compose(splitStr, removeWordsWithE, capitalizeFirstLetter, joinArr);

removeEwordsAndCapitalizeFirst('this is a test string'); //'This Is A String'
```

## Map, Reduce, and Filter
The `.map`, `.filter`, and `.reduce` array methods are used heavily in functional programming. Let's take a look at each:

Using map to double an array of numbers:
```js
const doubleNums = arr => arr.map(num => num * 2);
```

Using filter to filter out every other word in an array:
```js
const removeEveryOther = arr => arr.filter((word, indx) => indx % 2 === 0);
```

Reduce is the most powerful of the advanced array methods because you can basically use reduce to do anything that any of the other methods can do.

```js
//Note that we're passing in two arguments to reduce: the first is a function, and the second is the initial value of 'resultsArr', which in this case is an empty array:
const doubleNumsReduce = arr => arr.reduce((resultsArr, num) => [...resultsArr, num * 2] ,[]);
```

```js
//Note that we're passing in two arguments to reduce: the first is a function, and the second is the initial value of 'resultsArr', which in this case is an empty array:
const removeEveryOtherReduce = arr => arr.reduce((resultsArr, str, indx) => indx % 2 === 0 ? [...resultsArr,  str] : resultsArr , []);
```

We can even pass in an object as the initial reduce argument to do some really powerful stuff. For example, say we have the folling problem:

'Write a function called `uniqString` that takes in a string as an argument, and returns `true` if all of the letters in the string are unique, and `false` if there are any repeat letters'

We could solve it iteratively (in O(n) time) by doing the following:

```js
let uniqString = str => {
  var result = true;
  var uniqs = {};
  for(var i = 0; i < str.length; i++) {
    if(uniqs[str[i]]) result= false;
    else uniqs[str[i]] = true;
  }
  return result;
}

uniqString('hey'); //true
uniqString('hello'); //false
```

Or we could solve it more functionally using the `.reduce` method (still in O(n) time):

```js
let uniqString = str => str.split('').reduce((resultsObj, str) => {
  resultsObj[str] ? resultsObj.result = false : resultsObj[str] = true;
  return resultsObj;
} , {result: true}).result;

uniqString('hey'); //true
uniqString('hello'); //false
```

## Lodash
Lodash is a popular JavaScript library that gives you many more advanced array methods, as well as built in 'composition' (which Lodash calls 'flow') and 'currying' functions amongst many other helpful functional programming methods.

Checkout the [Lodash npm page](https://www.npmjs.com/package/lodash) and [Lodash official docs](https://lodash.com/docs/4.16.4) for more info.

# Resources
- [An Introduction to Functional JavaScript](https://www.sitepoint.com/introduction-functional-javascript/)
- [Mastering the JavaScript interview: What is a pure function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.972tnotik)
- [A Practical Guide to Functional Programming](https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming)
- [Eloquent JavaScript Functional Programming](http://eloquentjavascript.net/1st_edition/chapter6.html)
- [The Two Pillars of JavaScript Part 1](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.f9wm0o92p)
- [The Two Pillars of JavaScript Part 2: Functional Programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.nprk80uv0)
- [Mastering the JavaScript interview: What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0#.9t2cv9k4f)
