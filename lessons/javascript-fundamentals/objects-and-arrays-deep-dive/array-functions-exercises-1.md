- Write a function called `logToFive` that takes in one argument: an array. The function should log out the first five values of that array, starting with the first value and going up through the fifth.
    Examples:

  ```js
  logToFive(['a', 'b', 'c', 'd', 'e', 'f']); //logs 'a', 'b', 'c', 'd', 'e'
  logToFive([10, 20, 22, 12, 44, 55, 66, 77]); //logs 10, 20, 22, 12, 44
  logToFive(['a', 'b', 'c']); //logs 'a', 'b', 'c'
  ```
- Write a function called `sliceTwo` that takes in one argument: an array. The function should return a new array that contains only the first two elements of the original array.

  Examples:

  ```js
  sliceTwo(['a', 'b', 'c', 'd', 'e']); //returns ['a', 'b']
  sliceTwo(['cat', 'dog', 'koala', 'komodo dragon']); //returns ['cat', 'dog']
  ```
- Write a function called `sumFirstThree` that takes one arguments: an array of numbers. The function should sum together the first three numbers of the array and return that sum.

  Examples:

  ```js
  sumFirstThree([1, 2, 3, 4, 5]); //returns 6
  sumFirstThree([10, 20, 30, 4, 5]); //returns 60
  ```
- Write a function called `pushTwice` that takes in two arguments: an array and a value. The function should add the value to the end of the array twice, and return the new array.

  Examples:

  ```js
  pushTwice([1, 2, 3, 4, 5], 6); //returns [1, 2, 3, 4, 5, 6, 6]
  pushTwice(['cat', 'dog'], 'komodo dragon'); //returns ['cat', 'dog', 'komodo dragon', 'komodo dragon']
  ```
- Write a function called `containsInArr` that takes in an array as an argument. If the value is in the array the function should return 'true'. Otherwise the function should return 'false.'

  Examples:
  ```js
  containsInArr(['dog', 'cat', 'bear'], 'cat'); //true
  containsInArr(['dog', 'cat', 'bear'], 'llama'); //false
  ```
- Write a function called `multiSum` that takes in two arrays as arguments. The function should sum the first array. It should then add that sum to each individual number of the second array and return a new array of those summed numbers.

  Examples:

  ```js
  multiSum([1, 2, 3, 4], [1, 2, 3, 4]); //returns [11, 12, 13, 14]
  multiSum([5, 10, 15, 20], [10, 10, 10 10]); //returns [60, 60, 60, 60]
  ```
- Write a function called `filterLongWords` that takes in an array of words as an argument. The function should return a new array that only contains the words from the original array that are longer than five letters.
  Examples:

  ```js
  filterLongWords(['cat', 'dog', 'elephant', 'giraffe', 'bear']); //returns ['elephant', 'giraffe']
  filterLongWords(['airplane', 'car', 'motorcycle']); //returns ['airplane', 'motorcycle']
  ```
- Write a function called `valToObj` that takes in an array of numbers as an argument and returns a new array where all the of numbers are turned into objects. Each object should have a `val` property that contains the original number.
  Examples:

  ```js
  valToObj([1, 2, 3, 4, 5]); //returns [{val: 1}, {val: 2}, {val: 3}, {val: 4}, {val: 5}]
  ```
