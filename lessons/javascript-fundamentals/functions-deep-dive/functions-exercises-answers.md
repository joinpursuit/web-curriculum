
## Q1. javascript-functions-1

### Question

Write a function `hello(name)` that logs:

```
Hello ______!
```

Where the blank is replaced by the argument **name**. For example:

```
hello("John")
```

will return "Hello John!"

### Answer

```javascript
function hello(name) {
  console.log("Hello " + name + "!")
}
```

## Q2. javascript-functions-2

### Question

Write a function `square(x)` in that takes a number as an argument and returns the square of that number.

### Answer

```javascript
function square(x) {
  return x * x
}
```

## Q3. age-calculator

### Question

Write a function named `calculateAge` that takes two arguments: birth year and current year. The function should then calculate the two possible ages based on that year, and returns the result in the following format (replacing 'NN' with the possible years) : "You are either NN or NN."

Examples:
```javascript
calculateAge(1987,2016);  // returns 'You are either 28 or 29.'
```

### Answer

```javascript
function calculateAge(birthYear, currentYear) {
  var age = currentYear - birthYear;
  console.log('You are either ' + age + ' or ' + (age - 1));
}
```

## Q4. javascript-functions-4

### Question

Write a function `xToNum(num)` that takes as arguments two numbers: **x** and **num** and returns the sum of all numbers from **x** to **num** (including both). For example:

```javascript
xToNum(4, 8)  // = 4 + 5 + 6 + 7 + 8 = 30
```

will return 30.

### Answer

```javascript
function xToNum(x, num) {
  var sum = 0;
  for (i = x; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

**note:** there are several ways to implement this function.

## Q5. count-the-arguments

### Question

Write a function named `countTheArguments`. If less than five numbers are passed in as arguments when the function is called, the function should return "Sorry, not enough arguments." If more than five numbers are passed in as arguments when the function is called, the function should return "Sorry, too many arguments." If exactly five arguments are passed in when the function is called, the function should return the sum of the arguments.

Examples:
```javascript
countTheArguments(1, 2, 3, 4);  // returns 'Sorry, not enough arguments'
countTheArguments(44, 21, 55, 33, 3, 4);  // returns 'Sorry, too many arguments'
countTheArguments(12, 1, 3, 5, 10);  // returns 31
```

### Answer

```javascript
function countTheArguments(num1, num2, num3, num4, num5) {
  if(arguments.length < 5) {
    return "Sorry, not enough arguments"
  } else if (arguments.length > 5){
    return "Sorry, too many arguments"
  } else {
    return num1 + num2 + num3 + num4 + num5;
  }
}
```

## Q6. javascript-functions-5

### Question

Consider the following JavaScript code:

```javascript
function increase(result, num, count) {
  for (var i = 0; i < count; i++) {
    result += num
  }
  return result
}

function decrease(result, num, count) {
  for (var i = 0; i < count; i++) {
    result -= num
  }
  return result;
}

var result = 0;
result = increase(result, 3, 3)
result = decrease(result, 2, 2)

console.log(result);
```

What will be the output of `console.log(result)`?

### Answer

```
5
```

## Q7. temperature-converter

### Question

Write two functions, one named `celsiusToFahrenheit` and the other named `fahrenheitToCelsius.`  `celsiusToFahrenheit` should take in a celsius temperature as an argument and convert it to fahrenheit. Similarly, `fahrenheitToCelsius` should take in a fahrenheit temperature as an argument and convert it to celsius.

Examples:
```javascript
celsiusToFahrenheit(30);  // returns 86
fahrenheitToCelsius(32);  // returns 0
```

### Answer

```javascript
function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius * 9) / 5 + 32;
  console.log(celsiusInF);
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
  console.log(ahrenheitInC);
}
```

## Q8. javascript-functions-8-a

### Question

Given the following javascript code:

```javascript
function encode(digit1, digit2) {
  var code = "";

  function addZeroes(size) {
    for(var i = 0; i < size; i++) {
      code += "0";
    }
  }

  function addOnes(size) {
    for (var i = 0; i < size; i++) {
      code += "1";
    }
  }

  addZeroes(digit1);
  addOnes(digit2);

  return code;
}

var code = encode(3, 4);
console.log(code);
```

what will be the output to the console?

### Answer

```
0001111
```

## Q9. functionception

### Question

Write a function called `functionCeption` that returns a new function. When called, that new function should console logs out "Is all that we see or seem, But a dream within a dream?". Neither function should take any arguments.

Checkout the [Inception](https://en.wikipedia.org/wiki/Inception) wikipedia page if you're curious about the inspiration for this question. Also shoutout to Edgar Allen Poe for the [quote](http://www.poetryfoundation.org/poems-and-poets/poems/detail/52829).

Examples:
```js
var dreamFunc = functionCeption();
dreamFunc(); //logs "Is all that we see or seem, But a dream within a dream?"
```

### Answer

```javascript
function functionCeption() {
  return function() {
    console.log('Is all that we see or seem, But a dream within a dream?');
  }
}
```

## Q10. javascript-functions-6-a

### Question

This is a two part assignment.

**Part 1**

Write a javascript function `printElement(element, index)` that takes as argument an element of an array and an index. It then logs to the console:
1. The index.
2. The type of the element.
3. The element itself.


For example, after these two lines

```javascript
var arr = ["apple", "orange", "pear"]
printElement(arr[0], 0)
```
The following will be logged to the console:
```
index: 0, type: string, value: "apple"
```

**Part 2**

Write a function `printArrayElements(arr)` that takes an array as an argument. The function will traverse through the array, and for each element call the function `printElement`.

For example, after these two lines:
```javascript
var arr = ["apple", "orange", "pear"]
printArrauElements(arr)
```

The following will be logged to the console:
```
index: 0, type: string, value: apple
index: 1, type: string, value: orange
index: 2, type: string, value: pear
```

### Answer

```javascript
function printElement(element, index) {
  console.log("index: " + index + ", type: "
              + typeof element + ", value: " + element)
}

function printArrayElements(arr) {
  for (var i = 0; i < arr.length; i++){
    printElement(arr[i], i);
  }
}
```

## Q11. javascript-functions-7

### Question

You are given the following code:

```javascript
function forEach(arr, action) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = action(arr[i])
  }
  return arr;
}

function addOne(num) {
  return num + 1;
}

var arr = [0, 1, 2, 3, 4];
```

Write a single line of code that will result in each element of **arr** being increased by 1. After that line of code your code **arr** will look like this:

`[1, 2, 3, 4, 5]`

### Answer

```javascript
forEach(arr, addOne)
```

## Q12. javascript-functions-8-a

### Question

Given the following javascript code:

```javascript
function encode(digit1, digit2) {
  var code = "";

  function addZeroes(size) {
    for(var i = 0; i < size; i++) {
      code += "0";
    }
  }

  function addOnes(size) {
    for (var i = 0; i < size; i++) {
      code += "1";
    }
  }

  addZeroes(digit1);
  addOnes(digit2);

  return code;
}

var code = encode(3, 4);
console.log(code);
```

what will be the output to the console?

### Answer

```
0001111
```

## Q13. javascript-functions-9-a

### Question

Given the following javascript code:

```javascript
function encode(digit1, digit2, digit3) {
  var code = "";

  function addZeroes(size) {
    for(var i = 0; i < size; i++){
      code += "0";
    }
  }

  function addOnes(size) {
    for (var i = 0; i < size; i++){
      code += "1";
    }
  }

  for (var i = 0; i < digit3; i++) {
    addZeroes(digit1);
    addOnes(digit2);
  }

  return code;
}

var code = encode(2, 3, 4);
console.log(code);
```

what will be the output to the console?

### Answer

```
0011100111001110011100111
```

## Q14. product-of-all-other-numbers

### Question

You have an array of integers, and for each index you want to find the product of every integer except the integer at that index. Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products. However, do not use division in your answer.

For example:
```javascript
getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]); //returns [84, 12, 28, 21]
```
In other words, to get to the above answer your function would need to calculate: `[7*3*4, 1*3*4, 1*7*4, 1*7*3]`

### Answer

```javascript
function getProductsOfAllIntsExceptAtIndex(intArray) {

    var productsOfAllIntsExceptAtIndex = [];

    // for each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    var productSoFar = 1;
    for (var i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // for each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (var j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
}
```
