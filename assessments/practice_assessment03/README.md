# Practice Assessment 03

## Q1 Arguments
Write a function `sentence` that only takes the sum of four strings and makes a sentence with them without using `.join()`.
```js
sentence('I', 'like', 'to', 'dance') // returns "I like to dance"
sentence('Hello', 'World', 'Goodbye', 'World') // returns "Hello World Goodbye World"
```

## Q2 Advanced Array Methods & Callbacks
Write a function `Array.prototype.myMap` that works exactly like `Array.prototype.map` function. You can use `Array.prototype.forEach`.
```js
[1, 2, 3, 4].myMap(function(n) {
  return n + 1
})
//returns [2, 3, 4, 5]
```

## Q3 Constructor Functions
Create a constructor function `Restaurant` that takes in a name and makes a Restaurant object that has the properties: name, rating, health, and menu.
```js
var chipotle = new Restaurant("Chipotle")
chipotle
// returns Restaurant {name: "Chipotle", rating: null, health: "", menu: []}
```

## Q4 Constructor Functions
Create a constructor function `Dish` that takes in a name and makes a Dish object that has the properties: name, price.
```js
var guac = new Dish("Guacamole", 5)
guac
// returns Dish {name: "Guacamole", price: 5}
```

## Q5 Prototype
Write prototype functions for the instances of `Restaurant`: `addDish`, `inspectHealth`, `critic`, `printMenu`
```js
var mcd = new Restaurant('McDonalds')
var burger = new Dish('Hamburger', 5)
var fries = new Dish('French Fries', 3)
mcd.addDish(burger)
mcd.addDish(fries)
mcd.menu // returns [burger, fries]
mcd.inspectHealth("A")
mcd.health // returns "A"
mcd.critic(5)
mcd.rating // returns 5
mcd.printMenu // console.logs each menu item w/ as a string
// 'Hamburger $5'
// 'French Fries $3'
```

## Q6 Command Line Match
__ `cd`        A. creates new file
__ `pwd`       B. nagivates to a certain directory
__ `ls`        C. prints the entire file path
__ `touch`     D. creates new folder
__ `mkdir`     E. prints the contents of the current folder
__ `cd ..`     F. navigates upwards

## Q7 jQuery & DOM
You use jQuery to select for all list items on the page and place an click event listener on every list item. Explain what jQuery is doing behind the scenes to place an event listener on each list item?
```js
$('li').click(function() {
  console.log('hello world')
})
```

Explain why the code below doesn't work in the same way. What does `document.getElementsByTagName('li')` return? Why can't we use `.addEventListener()` in this case?
```js
document.getElementsByTagName('li').addEventListener('click', function() {
  console.log('hello world')
})
```

## Q8
Explain on a high level what an AJAX request is doing. Why do we need an object with properties of URL and success?

## Q9
```js
function add(a, b) {
  return a + b
}
module.exports = add

function multiply(a, b) {
  return a * b
}
module.exports = multiply
function subtract(a, b) {
  return a - b
}
module.exports = subtract
function divide(a, b) {
  return a / b
}
module.exports = divide
```
What will end up being exported? Fix the code so that we are exporting all the functions.
