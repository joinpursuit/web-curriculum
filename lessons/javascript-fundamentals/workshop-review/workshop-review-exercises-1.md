<!-- @acxbank for-js-9 -->
### Q1. for-js-9

Write a function that takes a string argument and returns the number of spaces in the string.  For example,

```js
numberOfSpaces("The quick brown fox jumped over the lazy dogs.")
```

returns 8.  Make sure your function returns the result, rather than printing it.
<!-- end @acxbank -->
<!-- @acxbank for-js-12 -->
### Q2. for-js-12

How many numbers will this loop print?

```js
for (var i = 0; i > 10; ++i) {
  console.log(i);
}
```

Be careful!
<!-- end @acxbank -->
<!-- @acxbank for-js-6 -->
### Q3. for-js-6

What is the output of this code? Pay careful attention to the for loop!

```java
var s = "CANTALOUPE";
for (var i = s.length - 1; i >= 0; i -= 2) {
  console.log(s[i]);
}
```
<!-- end @acxbank -->
<!-- @acxbank remove-zero -->
### Q4. remove-zero

Write a function that, given a string as input, will remove all 0s from that string.

Example:
```javascript
removeZero("hello2016")  // returns "hello216"
```
<!-- end @acxbank -->
<!-- @acxbank min-function -->
### Q5. min-function

Write a function `min` that takes two arguments and returns their minimum.

```javascript
// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```
<!-- end @acxbank -->
<!-- @acxbank sum-every-third -->
### Q6. sum-every-third

Write a function called `sumEveryThird` that takes in an array of numbers as an argument and returns the sum of every third number in the array.

Examples:
```js
sumEveryThird([1,2,3,4,5,6,7,8,9]); //returns 18
sumEveryThird([12,5,9]); //returns 9
sumEveryThird([4,9,1,3,8,1]); returns 2
```
<!-- end @acxbank -->
<!-- @acxbank find-longest-word -->
### Q7. find-longest-word

Write a function `findLongestWord()` that takes an array of words and returns the length of the longest one.

Example:
```js
findLongestWord(['dog', 'cat', 'bat', 'octopus']); // returns '7'
```
<!-- end @acxbank -->
<!-- @acxbank tip-calculator -->
### Q8. tip-calculator

Write a function called `tipCalculator` that takes in three arguments: total bill amount, tip percentage, and number of people. The function should return how much each person owes in tip.

Examples:
```js
tipCalculator(500, .15, 10); //returns 7.5
tipCalculator(80, .20, 2); //returns 8
```
<!-- end @acxbank -->
<!-- @acxbank repeat-a-string -->
### Q9. repeat-a-string

Write a function to concatenates a given string `n` times. The function should take in two arguments: the first argument should be the string, and the second argument should be the number of times the string should be concatenated. If no second argument is entered, the string should be logged once.

Example output:
```javascript
console.log(repeat('Ha!')); 
console.log(repeat('Ha!', 2)); 
console.log(repeat('Ha!', 3));
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"
```
<!-- end @acxbank -->
<!-- @acxbank print-sequence -->
### Q10. print-sequence

Write a loop that will log the following sequence to the console:
`1,2,4,7,11,16,22,29,37,46,56,67,79,92`

Hints:
The difference between two adjacent elements in this sequence increments by 1 at each step. A `while` loop might be helpful...
<!-- end @acxbank -->
<!-- @acxbank anagram-checker -->
### Q11. anagram-checker

Write a function called `anagramChecker` that takes in two strings as arguments and returns `true` if the strings are anagrams, or returns `false` if the two strings are not anagrams (two words are anagrams if they both contain the exact same letters, even if the letters are arranged in a different order).

Examples:
```js
anagramChecker("listen", "silent"); //returns true
anagramChecker("hello", "goodbye"); //returns false
anagramChecker("bus","sub"); //returns true
anagramChecker("boat", "dragon"); //returns false
```
<!-- end @acxbank -->
<!-- @acxbank max-array-slice-sum -->
### Q12. max-array-slice-sum

Write a function called `maxSliceSum` that takes an array as its argument and returns the maximum sum from any slice of the array. A 'slice' is any set of consecutive members of the array, so for the array `[1,2,3,4,5]`, `[1,2]` is a slice, `[2,3,4,5,]` is a slice, `[4,5]` is a slice...even `[1]` is a slice.

Examples:
```js
maxSliceSum([1,2,-20,4,5]); //returns 9
maxSliceSum([-100,1,2,-100,4,5,6,7]); //returns 22
maxSliceSum([1,2,3,4,5]); //returns 15
maxSliceSum([10,-20,10]); //returns 10
```
<!-- end @acxbank -->