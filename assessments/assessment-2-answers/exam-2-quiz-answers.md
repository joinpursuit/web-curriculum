
## Q1. for-js-14

### Question

What letters will this loop log out to the console?

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  arr.splice(i + 1, 1);
}
```

Be careful!

### Answer

a
c
e

## Q2. sum-array

### Question

Write a function called `sumArr` that takes in an array as an argument, and returns the sum of all the numbers in the array. The array can either contain numbers, or strings of numbers;

For example:
```js
sumArray([1, 2, 3, 4, 5]); //returns 15
sumArray([10, '5', '10', 5]); //returns 30
```

### Answer

```js
function sumArray(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += parseInt(arr[i]);
  }
  return sum;
}
```

### Answer

```js
function sumArray(arr) {
  return arr.reduce(function(num1, num2){
    return parseInt(num1) + parseInt(num2);
  })
}
```

## Q3. javascript-dom-0

### Question

What is the DOM? How is it different than jQuery?

### Answer

DOM stands for Document Object Model, which is basically an interface for interacting with webpages using JavaScript. The DOM provides a structured representation of the webpage which we can then access using built in methods and properties to do things like page and style manipulation.

jQuery is a library that's built on top of the DOM, that makes it easier to manipulate web pages.

## Q4. javascript-dom-create-element-1

### Question

Write the JavaScript code to create a new 'div' DOM element.

### Answer

```javascript
document.createElement('div');
```

## Q5. javascript-dom-id-1

### Question

Write the javascript code to change the text inside an element with id "hello" to "Hello World".

To illustrate, the HTML document before changing:
```html
  <span id="hello">blabla</span>
```
And after:
```html
  <span id="hello">Hello World</span>
```

### Answer

```javascript
var text = document.getElementById("hello");
text.innerHTML = "Hello World";
```

## Q6. javascript-this-output-11

### Question

What will be the output of the following code?

```javascript
var count = 0;

function add(){
  this.count += 1;
}

var Counter = {
   count: 10,
   add: function(){
     this.count += 2;
   }
}


Counter.add();
console.log(Counter.count);
add();
add();
Counter.add();
console.log(this.count);
```

### Answer

```
12
2
```

## Q7. javascript-constructor-broken

### Question

What is broken with this code? Please identify the 4 bugs and write the corrected code below:

```javascript
function Song(title){
  title = title;
}

Song.prototype.play = function(){
  console.log('Playing: ' + title);
}

var song1 = Song('Kendrick Lamar - Money Trees');

song1.prototype.play();
```
The code should log out the following:
```js
'Playing: Kendrick Lamar - Money Trees'
```
Bugs:

1.__________________________

2.__________________________

3.__________________________

4.__________________________

Corrected code:

### Answer

```js
function Song(title){
  this.title = title;
}

Song.prototype.play = function(){
  console.log('Playing: ' + this.title);
}

var song1 = new Song('Kendrick Lamar - Money Trees');

song1.play();
```

## Q8. javascript-constructor-output-1

### Question

What will the following code log out to the console?

```javascript
function Animal(species, breed, color){
  this.species = species;
  this.breed = breed;
  this.color = color;
  this.bark = function(){
    console.log('Woof!');
  }
}

Animal.prototype.barkAgain = function(){
  console.log('Woof woof!');
}

var dog1 = new Animal('dog', 'labrador', 'yellow');
var dog2 = new Animal('dog', 'retriever', 'golden');

dog1.bark = function(){
  console.log('Meow')
}

Animal.prototype.barkAgain = function() {
  console.log('Meow meow');
}

dog1.bark();
dog2.bark();
dog1.barkAgain();
dog2.barkAgain();

```

### Answer

'Meow'
'Woof!'
'Meow meow'
'Meow meow'

## Q9. linked-list-singly

### Question

What are the two properties of a node in a singly linked list?

### Answer

A node in a singly linked list has a `value` property and `next` property that references the next node in the linked list.

## Q10. linked-list-traversal

### Question

Describe how to traverse through a linked list. In other words, if you are given a 'head' node, how can you get the values of the rest of the nodes?

Please describe in 2-4 sentences - you do not need to actually write out the code.

### Answer

You should have a variable that stores the current node. You traverse the linked list by continuously setting the current node to the next node in the linked list until the next node is null or undefined marking the end of the linked list.
