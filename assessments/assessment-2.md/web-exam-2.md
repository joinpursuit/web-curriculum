<!-- @acxbank for-js-14 -->
### Q1. for-js-14

What letters will this loop log out to the console?

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  arr.splice(i + 1, 1);
}
```

<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank sum-array -->
### Q2. sum-array

Write a function called `sumArr` that takes in an array as an argument, and returns the sum of all the numbers in the array. The array can either contain numbers, or strings of numbers;

For example:
```js
sumArray([1, 2, 3, 4, 5]); //returns 15
sumArray([10, '5', '10', 5]); //returns 30
```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank javascript-dom-0 -->
### Q3. javascript-dom-0

What is the DOM? How is it different than jQuery?
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank javascript-dom-create-element-1 -->
### Q4. javascript-dom-create-element-1

Write the JavaScript code to create a new 'div' DOM element.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank javascript-dom-id-1 -->
### Q5. javascript-dom-id-1

Write the javascript code to change the text inside an element with id "hello" to "Hello World".

To illustrate, the HTML document before changing:
```html
  <span id="hello">blabla</span>
```
And after:
```html
  <span id="hello">Hello World</span>
```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-11 -->
### Q6. javascript-this-output-11

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
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank javascript-constructor-broken -->
### Q7. javascript-constructor-broken

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
<br>
<br>
2.__________________________
<br>
<br>
3.__________________________
<br>
<br>
4.__________________________

Corrected code:
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank javascript-constructor-output-1 -->
### Q8. javascript-constructor-output-1

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
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank linked-list-singly -->
### Q9. linked-list-singly

What are the two properties of a node in a singly linked list?
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->
<!-- @acxbank linked-list-traversal -->
### Q10. linked-list-traversal

Describe how to traverse through a linked list. In other words, if you are given a 'head' node, how can you get the values of the rest of the nodes?

Please describe in 2-4 sentences - you do not need to actually write out the code.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!-- end @acxbank -->

