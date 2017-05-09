- title: JavaScript Fundamentals: Advanced Array Methods
- tags: javascript, arrays, functions

## Objectives
* Be able to use `forEach` and `map`

## Resources
- [Five Array Methods You Should Use Today (indexOf, forEach, map, filter, reduce)](http://colintoh.com/blog/5-array-methods-that-you-should-use-today)

##Lecture
####Intro to Advanced Array Methods
Built-in array methods are a really powerful tool in JavaScript. We're familiar with some of the most commonly used array methods, so now let's learn some more advanced ones! 

**Discussion:** What are some array methods that we already know? Why do we use them?

**Discussion:** What are some strategies for looping over arrays?

####Exercise: Implement `forEach`
Write a function called `forEach` that takes in two arguments: an array and a function. `forEach` should apply the passed in function to every member of the array. It should not return anything.

Example:
```javascript
var arr = [1,2,3,4,5];

forEach(arr, function(val){
	console.log(val);
}); 

// logs 1, 2, 3, 4, 5
```

####Exercise: Implement `map`
Write a function called `map` that takes in two arguments: an array and a function. `map` should apply the passed in function to every memeber of the array, and return a new array with the results. 

Example:
```javascript
map(arr, double); //returns [ 2, 4, 6, 8, 10 ]

var arr = [1,2,3,4,5];

function double(num) {
	return num * 2;
}
```

####Demo: Advanced array methods
- `forEach`
- `map`
- `filter`
- `reduce`

**Discussion:** What are some advantages of using forEach instead of a `for` loop? Disadvantages? What about `map`, `reduce`, and `filter`?
```