<!-- @acxbank array-length -->
### Q1. array-length

Write a function named `arrLength` that takes in an array as an argument. The function should return the length of that array.

Examples:
```javascript
arrLength([1, 2, 3, 3, 2, 1]);  // returns 6
arrLength(["jets", "mets", "giants", "yankees"]); //returns 4
```

### Q2. which-array-is-longer

Write a function named `longestArr` that takes in two arrays as arguments. The function should compare the length of the two arrays and return whichever array is longer (aka whichever array has more values in it).

Examples:
```javascript
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);  // returns [1, 2, 3, 4, 5]
longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);  // returns ["jets", "mets", "giants", "yankees"]
```
<!-- end @acxbank -->
<!-- @acxbank add-two-array-elements -->
### Q3. add-two-array-elements

Write a function named `addTwoElements` that takes in three arguments: an array, and two values to add to that array. The function should add those two values to the end of the array and return the updated array.

Examples:
```javascript
addTwoElements([1,2,3], 4, 5);  // returns [1 2, 3, 4, 5]
addTwoElements(["hello", "hi"], "hey", "what up");  // returns ["hello", "hi", "hey", "what up"]
```
<!-- end @acxbank -->
<!-- @acxbank remove-last-two-from-array -->
### Q4. remove-last-two-from-array

Write a function `removeLastTwo` that takes an array as an argument and returns a copy of the array without the last two elements. If the original array is two elements or less, the function should return an empty array.

Example:
```js
removeLastTwo(['dog', 'cat', 'bat', 'octopus']); // returns ['dog','cat']
```
<!-- end @acxbank -->
<!-- @acxbank array-middle-element -->
### Q5. array-middle-element

Write a function `middleElement` that takes an array as an argument and returns the middle element of that array. If the array has an even number of elements, the function should return "Oops, there's no middle..."

Example:
```js
middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']); // returns 'bat'
middleElement([1, 2, 3, 4, 5]); // returns 3
middleElement([1, "hmm", "wat", 4, 5]); // returns "wat"
middleElement([1, 2, 3, 4, 5, 6]); // returns "Oops, there's no middle"
middleElement(["john", "paul", "george", "ringo"]); // returns "Oops, there's no middle"
```
<!-- end @acxbank -->
<!-- @acxbank every-third-array-element -->
### Q6. every-third-array-element

Write a function `everyThird` that takes an array as an argument and returns a new array that contains every third element of the original array.

Example:
```js
everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']); // returns ['c','f','i']
everyThird([1,2,3,4,5,6,7,8,9,10,11,12]) // returns [ 3, 6, 9, 12 ]
```
<!-- end @acxbank -->
<!-- @acxbank stringify-two-arrays -->
### Q7. stringify-two-arrays

Write a function `stringArrays` that takes two arrays as arguments and returns ONE string that contains all the words in both arrays, separated by commas. In other words, the function joins both arrays together then turns everything into a string.

Example:
```js
stringArrays(['arya', 'sansa', 'bran'], ['daenerys', 'tyrion', 'jon']); // returns 'arya, sansa, bran, daenerys, tyrion, jon'
```
<!-- end @acxbank -->
<!-- @acxbank array-tail -->
### Q8. array-tail

Write a function called `tail` that removes the first element from an array. The function should take in one argument: an array. The function should return a new array that contains all of the original elements except the first. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
tail([1, 2, 3, 4]);  // returns [2, 3, 4]
tail(['cat', 'dog', 'catdog']);  // returns ['dog', 'catdog']
tail([1, 'one']);  // returns ['one']
```
<!-- end @acxbank -->
<!-- @acxbank join-three-arrays -->
### Q9. join-three-arrays

Write a function called `joinThreeArrays` that joins three arrays together. The function should take in three separate arrays as arguments. The function should return a new array that contains all three arrays combined into one array. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
joinThreeArrays([1, 2], [3, 4], [5, 6]); // returns [1, 2, 3, 4, 5, 6]
```
<!-- end @acxbank -->
<!-- @acxbank remove-from-array -->
### Q10. remove-from-array

Write a function that removes a word from an array. The function should take in two arguments: the array, and the word to remove. If the 'word to remove' is not in the array the entire original array should be returned.

Hint: there are a couple of [array methods](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

```javascript
removeFromArray(['cat', 'dog', 'frog'], 'frog'); // returns ['cat', 'dog']
removeFromArray(['cat', 'dog', 'frog'], 'fish'); // returns ['cat', 'dog', 'frog']
```
<!-- end @acxbank -->
<!-- @acxbank array-string-plus -->
### Q11. array-string-plus

Write a function that takes in an array of strings and returns a single string with the word 'plus' inserted between every word.

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Example:
```javascript
stringPlus(['one', 'two', 'three']);  // returns 'one plus two plus three'
```
<!-- end @acxbank -->
<!-- @acxbank array-last-to-first -->
### Q12. array-last-to-first

Write a function that removes the last element of an array and adds it to the front. Your function should NOT use `array.length` or a loop. The function should take in one argument: an array. The function should return a new array with the last element from the original array removed, and added to the front of the new array.

Hint: there are two [array methods](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
lastToFirst([1, 2, 3, 4]);  // returns [4, 1, 2, 3]
```
<!-- end @acxbank -->
<!-- @acxbank array-double-challenge -->
### Q13. array-double-challenge

Write a function named `doubleArr` that takes in an array of numbers as an argument. The function should return a new array that doubles every number from the original array. However, you should not use a `for` loop,  `while` loop, or `forEach`. 

Examples:
```javascript
doubleArr([1, 2, 3]);  // returns [2, 4, 6]
doubleArr([10, 8, 5]);  // returns [20, 16, 10]
```
<!-- end @acxbank -->
<!-- @acxbank array-sum-challenge -->
### Q14. array-sum-challenge

Write a function named `sumArr` that takes in an array of numbers as an argument. The function should return the sum of all of the numbers in the array. However, you should not use a `for` loop,  `while` loop, or `forEach`. 

Examples:
```javascript
sumArr([1, 2, 3]);  // returns 6
sumArr([5, 5, 5, 10, 10, 10]);  // returns 45
```
<!-- end @acxbank -->
