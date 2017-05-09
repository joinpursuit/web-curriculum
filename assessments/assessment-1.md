<!-- @acxbank for-js-3 -->
### Q1. for-js-3

What is the console output of this code?

```js
var greeting = "Hello!";
for (var i = 0; i < greeting.length; ++i) {
    console.log(greeting.slice(i));
}
```
<!-- end @acxbank -->
<!-- @acxbank html-tags-div -->
### Q2. html-tags-div

What is the purpose of  `<div>....</div>` tags?
<!-- end @acxbank -->
<!-- @acxbank html-tags-a -->
### Q3. html-tags-a

write the html code to create a link to http://www.google.com and give it the title "search".
<!-- end @acxbank -->
<!-- @acxbank html-css-class-id-1 -->
### Q4. html-css-class-id-1

How do you select an element with id "myele"? With class "myele"? What is the difference between id and class?
<!-- end @acxbank -->
<!-- @acxbank javascript-data-types -->
### Q5. javascript-data-types

What are JavaScript's six data types?
<!-- end @acxbank -->
<!-- @acxbank whats-wrong-obj -->
### Q6. whats-wrong-obj

What is wrong with the following code? It should define a car object, and define a function that takes in a car object as a parameter and returns the car's type (in this example the carType function should return 'Tesla'). Lastly, the function should be correctly called. Please identify and fix all 4 bugs:

```js
var car = {color: 'Red' ; type: 'Tesla' ; wheels: 4 };

function carType(){
    return type;
}

carType(car.type);
```

Bug 1: ________________________________________________________

Bug 2: ________________________________________________________

Bug 3: ________________________________________________________

Bug 4: ________________________________________________________

Write out the corrected code below:
<!-- end @acxbank -->
<!-- @acxbank scope-mystery -->
### Q7. scope-mystery

What does the following code log to the console?

```js
var greeting = "hello";

function mysteryGreeting(){
    var greeting = "goodbye";
    console.log(greeting);
}

mysteryGreeting();
console.log(greeting);
```
<!-- end @acxbank -->
<!-- @acxbank capitalize-even-lowercase-odd -->
### Q8. capitalize-even-lowercase-odd

Write a function that takes a string as input. If the string is an even number of letters the function should capitalize and return the entire string. If the string is an odd number of letters the function should change all the letters to lower case and return the string.

Examples:
```javascript
capitalizeOrLowerCase('EvEn'); // returns 'EVEN'
capitalizeOrLowerCase('oDd'); //returns 'odd'
```

<!-- end @acxbank -->
<!-- @acxbank contains-in-array -->
### Q9. contains-in-array

Write a function called `contains` that checks if an element exists within an array. The function should take in two arguments: an array, and an element to search for within that array. The function should return `true` if the element is within the array, and should return `false`   if the element is not in the array. 


Examples:
```javascript
contains([1,2,3,4], 2);     //returns true
contains([1,2,3,4], 1);     //returns true
contains([1,2,3,4], 5);     //returns false
contains([1,2,3,4], 'dog'); //returns false
```
<!-- end @acxbank -->
<!-- @acxbank slice-first-letter-of-array -->
### Q10. slice-first-letter-of-array

Write a function called `sliceFirst` that takes in an array of strings and returns an array with the first letter of each string removed.

For example:
```js
sliceFirst(['john', 'paul', 'ringo']); //returns ['ohn', 'aul', 'ingo']
sliceFirst(['remove','every','first','letter']); returns ['emove', 'very', 'irst', 'etter']
```
<!-- end @acxbank -->
