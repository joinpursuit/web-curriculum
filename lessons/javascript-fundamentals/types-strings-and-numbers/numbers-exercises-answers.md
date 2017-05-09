
## Q1. sumThree

### Question

Write a function called `sumThree` that takes in an three numbers and returns a sum of those three numbers.

Examples:
```js
sumThree(2, 5, 7); //returns 14
sumThree(1, 10, 100); //returns 111
```

### Answer

```javascript
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
```

## Q2. divide

### Question

Write a function called `divide` that takes in two numbers as arguments and returns the first number divided by the second number.

Examples:
```js
divide(10, 2); //returns 5
divide(100, 10); //returns 10
```

### Answer

```javascript
function divide(num1, num2) {
  return num1 / num2;
}
```

## Q3. add-two

### Question

Write a function called `addTwo` that takes in one number as an argument and returns that number plus two.

Examples:
```js
addTwo(5); //returns 7
addTwo(22); //returns 24
addTwo(3); //returns 5

```

### Answer

```javascript
function addTwo(num) {
  return num + 2;
}
```

## Q4. remainder

### Question

Write a function called `getRemainder` that takes in two numbers as arguments and returns the remainder of the first number divided by the second number.

Examples:
```js
getRemainder(11, 2); //returns 1
getRemainder(105, 10); //returns 5
getRemainder(35, 11); //returns 2
```

### Answer

```javascript
function getRemainder(num1, num2) {
  return num1 % num2;
}
```

## Q5. string-to-int

### Question

Write a function called `stringToNumber` that takes in a string and converts it to a number.

Examples:
```js
stringToNum("9"); //returns 9
stringToNum("101"); //returns 101
stringToNum("64"); //returns 64
```

### Answer

```javascript
function stringToNum(str) {
  return parseInt(str);
}
```

## Q6. javascript-math-1

### Question

Write a function that will check if the absolute value of two numbers is equal. This means that the following are equal:

```javascript
isAbsEqual(4,-4) // returns true
isAbsEqual(-4, 4) // returns true
isAbsEqual(4, 4) // returns trie
```

Use the Math library.

### Answer

```javascript
function isAbsEqual(num1, num2) {
  return Math.abs(num1) == Math.abs(num2)
}
```

## Q7. parseInt-sum

### Question

Write a function called `numStringAdder` that takes in two arguments. The arguments can be either numbers or a string of a number (in other words, the arguments can be either `2` or `"2"`, `3` or `"3"`, etc.). The function should add the two numbers together and return a NUMBER. Make sure you are returning a number, and not a string.

Examples:
```javascript
numStringAdder(2, "4"); // returns 6
numStringAdder("3", 5); // returns 8
numStringAdder("6", "1"); // returns 7
numStringAdder(1, 1); // returns 2
```

### Answer

```javascript
function numStringAdder(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
```

## Q8. javascript-math-2

### Question

Write a function `sumOfAbs(arr)` that will receive an argument an array of numbers, and return the sum of the absolute values of these numbers. For example:

```javascript
sumOfAbs([ 1, 1, -1, -1])  // will return 4
```

Use the Math library.

### Answer

```javascript
function sumOfAbs(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }

  return sum;
}
```

## Q9. javascript-math-3

### Question

Write a function `maxOfFour(num1, num2, num3, num4)` that takes as input four nubmers and returns the largest of these numbers.

Use the Math library.

### Answer

```javascript
function maxOfFour(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4)
}
```

## Q10. random-number-generator

### Question

Write a function that takes in a number as an argument and returns a random number between 0 and the argument number. For example, if you input 100 the function should return a random number between 0 and 100.

Example output:
```javascript
randNum(100); // 77
randNum(100); // 32
randNum(100); // 81
randNum(5); // 4
randNum(5); // 2
randNum(5); // 3
```

### Answer

```javascript
function ranNum(num) {
  return Math.floor(Math.random() * num);
}
```

## Q11. javascript-math-7

### Question

Write a function `randomNumber(max)` that return a random number in the range between 0 and the **max**.

### Answer

```javascript
function randomNumber(max) {
  return Math.random() * max ;
}

```

## Q12. javascript-math-8

### Question

You are given a function that returns a random number between **min** and **max**:

```javascript
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
```

Write a function `randomArray(size, min, max)` that returns an array of size **size** where each element is a **whole** number between **min** and **max**.

### Answer

```javascript
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomArray(size, min, max) {
  var num, arr = []
  for (var i = 0; i < size; i++) {
    num = Math.round(randomNumber(min, max))
    arr.push(num)
  }

  return arr
}

```

## Q13. challenge-in-rectangle

### Question

Suppose we represent a rectangle in Cartesian coordinates by an object with four properties: left and right _x_ coordinates, and the top and bottom _y_ coordinates.  Assume the left coordinate is less than the right, and the bottom coordinate less than the bottom.

For example,
```javascript
rectangle = {
  left: 4,
  right: 10,
  bottom: -2,
  top: 2
};
```

Write a function `inRectangle(x, y, rect)` that takes the _x_ and _y_ coordinates of a point, and a rectangle object as above, and returns true if the point is inside the rectangle.  If the point falls exactly on the edge of the rectangle, the function should return true.

### Answer

```
function inRectangle(x, y, rect) {
  return (
    rect.left <= x && x <= rect.right &&
    rect.bottom <= y && y <= rect.top);
}
```
