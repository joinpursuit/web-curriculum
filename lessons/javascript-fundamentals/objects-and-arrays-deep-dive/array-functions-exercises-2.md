1. Write a function called `logToNum` that takes in two arguments: an array and a number. The function should log out the values of that array starting with the first value and going up to the index passed in as the second argument.
    Examples:

  ```js
  logToNum(['a', 'b', 'c', 'd', 'e', 'f'], 2); //logs 'a', 'b', 'c'
  logToNum(['a', 'b', 'c', 'd', 'e', 'f'], 4); //logs 'a', 'b', 'c', 'd', 'e'
  logToNum(['a', 'b', 'c', 'd', 'e', 'f'], 0); //logs 'a'
  ```
- Write a function called `sliceFour` that takes in one argument: an array. The function should return a new array that contains only the first four elements of the original array.

  Examples:

  ```js
  sliceTwo(['a', 'b', 'c', 'd', 'e']); //returns ['a', 'b', 'c', 'd']
  sliceTwo(['cat', 'dog', 'koala', 'komodo dragon']); //returns ['cat', 'dog', 'koala', 'komodo dragon']
  ```
- Write a function that adds together every other element of an array, starting with the first element.

  Examples:

  ```js
  sumEveryOther([1, 2, 3, 4, 5]); returns 9
  sumEveryOther([10, 2, 10, 2, 10]); returns 30
  ```
- Write a function that takes two arguments: an array of numbers (arr), and a number (n). The function should sum together the first n numbers of the array and return that sum.

  Examples:

  ```js
  sumToN([1, 2, 3, 4, 5], 2); //returns 3
  sumToN([1, 2, 3, 4, 5], 4); //returns 10
  ```
- Write a function called `pushThrice` that takes in two arguments: an array and a value. The function should add the value to the end of the array three times, and return the new array.

  Examples:

  ```js
  pushTwice([1, 2, 3, 4, 5], 6); //returns [1, 2, 3, 4, 5, 6, 6, 6]
  pushTwice(['cat', 'dog'], 'komodo dragon'); //returns ['cat', 'dog', 'komodo dragon', 'komodo dragon', 'komodo dragon']
  ```
- Write a function called `containsTwoInArr` that takes in three arguments: an array, and two values. If both values are in the array the function should return 'true'. Otherwise the function should return 'false.'

  Examples:
  ```js
  containsTwoInArr(['dog', 'cat', 'bear'], 'cat', 'bear'); //true
  containsTwoInArr(['dog', 'cat', 'bear'], 'cat','llama'); //false
  ```
- Write a function called `wordsLongerThanN` that takes in an array of words and a number (n) as an argument. The function should return a new array that only contains the words from the original array that are longer than 'n' letters, where 'n' is the number passed in as the second argument.
    Examples:

    ```js
    wordsLongerThanN(['cat', 'dog', 'elephant', 'giraffe', 'bear'], 3); //returns ['elephant', 'giraffe', 'bear']
    wordsLongerThanN(['airplane', 'car', 'motorcycle'], 20); //returns []
    ```
- Write a function called `valToObj` that takes in an array of numbers as an argument and returns a new array where all the of numbers are turned into objects. Each object should have a `val` property that contains the original number, and a `squared` property that contains the number squared.
  Examples:

  ```js
  valToObj([1, 2, 3, 4, 5]); //returns [{val: 1, squared: 1}, {val: 2, squared: 4}, {val: 3, squared: 9}, {val: 4, squared: 16}, {val: 5, squared: 25}]
  ```
- Write a function called `pushNTimes` that takes in three arguments: an array, a value, and a number (n). The function should add the value to the end of the array n number of times (depending on what number you entered in as the third argument), and return the new array.

  Examples:

  ```js
  pushNTimes([1, 2, 3, 4, 5], 6, 4); //returns [1, 2, 3, 4, 5, 6, 6, 6, 6]
  pushNTimes(['cat', 'dog'], 'komodo dragon', 1); //returns ['cat', 'dog', 'komodo dragon']
  ```
<!-- @acxbank remove-last-two-from-array -->
- Write a function `removeLastTwo` that takes an array as an argument and returns a copy of the array without the last two elements. If the original array is two elements or less, the function should return an empty array.

  Example:
  ```js
  removeLastTwo(['dog', 'cat', 'bat', 'octopus']); // returns ['dog','cat']
  ```
<!-- end @acxbank -->
<!-- @acxbank every-third-array-element -->
- Write a function `everyThird` that takes an array as an argument and returns a new array that contains every third element of the original array.

  Example:
  ```js
  everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']); // returns ['c','f','i']
  everyThird([1,2,3,4,5,6,7,8,9,10,11,12]) // returns [ 3, 6, 9, 12 ]
  ```
<!-- end @acxbank -->
<!-- @acxbank stringify-two-arrays -->
- Write a function `stringArrays` that takes two arrays as arguments and returns ONE string that contains all the words in both arrays, separated by commas. In other words, the function joins both arrays together then turns everything into a string.

  Example:
  ```js
  stringArrays(['arya', 'sansa', 'bran'], ['daenerys', 'tyrion', 'jon']); // returns 'arya, sansa, bran, daenerys, tyrion, jon'
  ```
<!-- end @acxbank -->
<!-- @acxbank array-tail -->
- Write a function called `tail` that removes the first element from an array. The function should take in one argument: an array. The function should return a new array that contains all of the original elements except the first.

  Examples:
  ```javascript
  tail([1, 2, 3, 4]);  // returns [2, 3, 4]
  tail(['cat', 'dog', 'catdog']);  // returns ['dog', 'catdog']
  tail([1, 'one']);  // returns [1]
  ```
<!-- end @acxbank -->
<!-- @acxbank join-three-arrays -->
- Write a function called `joinThreeArrays` that joins three arrays together. The function should take in three separate arrays as arguments. The function should return a new array that contains all three arrays combined into one array.

  Examples:
  ```javascript
  joinThreeArrays([1, 2], [3, 4], [5, 6]); // returns [1, 2, 3, 4, 5, 6]
  ```
<!-- end @acxbank -->
<!-- @acxbank remove-from-array -->
- Write a function that removes a word from an array. The function should take in two arguments: the array, and the word to remove. If the 'word to remove' is not in the array the entire original array should be returned.

  ```javascript
  removeFromArray(['cat', 'dog', 'frog'], 'frog'); // returns ['cat', 'dog']
  removeFromArray(['cat', 'dog', 'frog'], 'fish'); // returns ['cat', 'dog', 'frog']
  ```
<!-- end @acxbank -->
<!-- @acxbank array-string-plus -->
- Write a function that takes in an array of strings and returns a single string with the word 'plus' inserted between every word.

  Example:
  ```javascript
  stringPlus(['one', 'two', 'three']);  // returns 'one plus two plus three'
  ```
<!-- end @acxbank -->
<!-- @acxbank array-last-to-first -->
- Write a function that removes the last element of an array and adds it to the front. Your function should NOT use `array.length` or a loop. The function should take in one argument: an array. The function should return a new array with the last element from the original array removed, and added to the front of the new array.

  Examples:
  ```javascript
  lastToFirst([1, 2, 3, 4]);  // returns [4, 1, 2, 3]
  ```
<!-- end @acxbank -->
