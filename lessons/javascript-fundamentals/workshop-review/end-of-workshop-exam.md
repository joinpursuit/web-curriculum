**1** Given an array `myFavoriteNumbers`, write code to log to the console the **first** element of the array.

**2** Given an array `myFavoriteNumbers`, write code to log to the console the **last** element of the array.

**3** What is the value of 13 % 4 ?

**4** What does this program output?

```js
var myFavNumber = 133;
var yourFavNumber = 272;
if(myFavNumber > yourFavNumber) {
  console.log('A');
} else {
  console.log('B');
}
console.log('C');
```

**5** What does each below symbol mean?
```js
a. &&
b. ||
c. !
d. >
e. <
```

**6** Write a function named `sumAllElements` that returns the sum of all of the elements of an array.




**7** What is wrong with the following function? It should return the square of the input integer. Please **identify and fix 3 bugs.**

var Square an Integer = function () {
  x * x;
}


**8** The following function should print out each element of the input array, but it's broken. What is wrong with the following function? Please identify and fix at least 6 bugs:

```js
var function(input) {
  for(var i = 0, i < lengthOfInput, i+1) {
    console log (input(i));
  }
}
```

**9** What does this program output for the call: `MysteryFunction([1,7,5,4,9])`?

```js
var MysteryFunction = function (input) {
  for(var i = 0; i < input.length; i++) {
    if(MysteryHelperFunction(input[i]) % 2 === 0) {
      return input[i];
    }
  }
}

var MysteryHelperFunction = function (input) {
  var output = Math.pow(input, 2);
  var delta = 20;
  if (output > 20) {
    delta = -20;
  }
  return output + delta;
}
```

BONUS: Wriet a function called `secondSmallestElement` that reutns the second smallest element in the input array (assume the input array contains only unique integers, in other words whole numbers that are never repeated):










