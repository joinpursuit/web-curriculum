
## Q1. forEach-log

### Question

Write a function that uses the [`forEach`](http://www.w3schools.com/jsref/jsref_forEach.asp) array method to log out every member of an array to the console. The function should only take in one argument, the array. The function should NOT use a traditional `for` loop.

### Answer

```javascript
function forEachLog(arr) {
  arr.forEach(function (element) {
    console.log(element);
  })
}
```

## Q2. simple-filter

### Question

Write a function called `greaterThan10` that uses the [`filter`](http://www.w3schools.com/jsref/jsref_filter.asp) to filter an array and only return numbers that are greater than 10. The function should take in an array of numbers as an argument. 

Examples:
```js
greaterThan10([1,2,3,11,12,13]); //returns [11,12,13]
greaterThan10([11,2,3,1,22,4,33]); //returns [11,22,33]
```

### Answer

```javascript
function greaterThan10(arr) {
  return arr.filter(function (val) {
    return val > 10;
  })
}
```

## Q3. simple-filter-2

### Question

Write a function called `filterEvens` that uses the [`filter`](http://www.w3schools.com/jsref/jsref_filter.asp) method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

Examples:
```js
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
```

### Answer

```javascript
function filterEvens(arr) {
  return arr.filter( function(val) {
    return val % 2 === 0;
  })
}
```

## Q4. forEach-sum

### Question

Write a function called `forEachSum` that takes in an array of numbers as an argument and returns a sum of the array. The function should use the [`forEach`](http://www.w3schools.com/jsref/jsref_forEach.asp) array method and should NOT use  `for` loop or `while` loop.

### Answer

```javascript
function forEachSum(arr) {
  var sum = 0;
  arr.forEach(function (num) {
    sum += num;
  })
  return sum;
}
```

## Q5. implement-forEach

### Question

Write a function called `forEach` that takes in two arguments: an array and a function. `forEach` should apply the passed in function to every member of the array. It should not return anything.

Example:
```javascript
forEach(arr, log); // logs 1, 2, 3, 4, 5

var arr = [1,2,3,4,5];

function log(val) {
  console.log(val);
}
```

### Answer

```javascript
function forEach(arr, func){
  for(var i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}
```

## Q6. map-triple-array

### Question

Write a function that uses the [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) array method to triple every member of an array. The function should only take in one argument, the array. The function should NOT use a loop.

### Answer

```javascript
function tripleArray(arr) {
  return arr.map(function (element) {
    return element * 3;
  })
}
```

## Q7. map-strings-to-nums

### Question

Write a function called `stringsToNums ` that takes an array of strings, converts them to numbers, and returns a new array containing those numbers. Use the `map` array method, do not use any traditional loops.

Examples:
```js
stringToNums(["4", "3", "9"]); //returns [4,3,9]
stringToNums(["1", "22", "7"]); //returns [1,22,7]
```

### Answer

```javascript
function stringsToNums(arr) {
  return arr.map(function (num) {
    return parseInt(num);
  })
}
```

## Q8. first-letter-uppercase-map

### Question

Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. However, do not use a `for` loop, `while` loop, or `forEach`.
```
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
```

### Answer

```javascript
var uppercase = function (str) {  
  return str.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}
```

## Q9. implement-map

### Question

Write a function called `map` that takes in two arguments: an array and a function. `map` should apply the passed in function to every memeber of the array, and return a new array with the results. 

Example:
```javascript
map(arr, double); // returns [ 2, 4, 6, 8, 10 ]

var arr = [1, 2, 3, 4, 5];

function double(num) {
  return num * 2;
}
```

### Answer

```javascript
function map(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;  
}
```

## Q10. reduce-sum

### Question

Write a function called `sum` that uses the [`reduce`](http://www.w3schools.com/jsref/jsref_reduce.asp) to sum up an array of numbers. Do NOT use a typical loop; just use the `reduce` method. 

Examples:
```js
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20
```

### Answer

```javascript
function sum(arr) {
  return arr.reduce(function (num1, num2) {
    return num1 + num2;
  })
}
```

## Q11. reduce-min

### Question

Write a function called `reduceMin` that uses the [`reduce`](http://www.w3schools.com/jsref/jsref_reduce.asp) to return the minimum number in an array of numbers. Do NOT use a typical loop; just use the `reduce` method. 

Examples:
```js
reduceMin([2, 3, 4, 5, 1]); //returns 1
reduceMin([6, 7, 7, 4]); //returns 4
reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100
```

### Answer

```javascript
function reduceMin(arr) {
  return arr.reduce(function (num1, num2) {
    if(num1 < num2){
      return num1;
    } else {
      return num2;
    }
  })
}
```
