For each of these questions, solve it and then ask yourself 'what is the Big O runtime?'. Then ask your self: 'is there a way this can be solved more efficiently?'

### Third Largest In Array
Write a function called `thirdLargest` that takes in an array of numbers as an argument and returns the third largest number.

```js
thirdLargest([3, 5, 7, 9, 8]); //returns 7
thirdLargest([10, 5, 15, 10, 5]); //returns 5
```

<details>
<summary> Best runtime: </summary>

This can be solved in O(n) runtime.

</details>

### Unique String
Write a function called `uniqString` that takes in a string as an argument, and returns `true` if all of the letters in the string are unique, and `false` if there are any repeat letters:

```js
uniqString('watermelon'); //returns false
uniqString('apple'); //returns false
uniqString('pear'); //returns true
```

<details>
	<summary> Best runtime: </summary>

  This can be solved in O(n) runtime.

</details>

### Last Items
Write a function called `lastItems` that takes in an array of store items as an argument, and returns an array of the items that there are only one of.

For example:

```js
lastItems(['shoes', 'shoes', 'shirts', 'shirts', 'sunglasses', 'socks']); //returns ['socks', 'sunglasses']
lastItems(['shoes', 'shirts', 'shirts', 'sunglasses', 'socks']); //returns ['shoes', 'socks', 'sunglasses']
lastItems(['shirts', 'shirts', 'shirts', 'pants', 'sunglasses', 'sunglasses', 'socks', 'socks', 'socks']); //returns ['pants']
```

<details>
	<summary> Best runtime: </summary>

  This can be solved in O(n) runtime.

</details>

## Anagram
An anagram is a word or phrase that is formed by rearranging another word. Some examples of anagram pairs are 'alert & later', 'baker & break', 'below & elbow', 'debit card & bad credit', 'the eyes & they see', 'dormitory & dirty room'. Write a function called `anagram` that takes in two strings as an argument and returns `true` if the two strings are anagrams of each other and `false` if they aren't.

For example:
```js
anagram('the eyes', 'they see'); //true
anagram('basketball', 'airplane'); //false
anagram('dormitory', 'dirty room'); //true
anagram('red', 'magenta'); //false
```
<details>
	<summary> Best runtime: </summary>

  This can be solved in O(n) runtime. Note that most sorting algorithms (including the `.sort` method) takes `O(n log n)` runtime, which is longer than O(n).

</details>

## Palindrome
A palindrome is a word or phrase that is spelled the same forwards and backwards. Some examples of palindromes are 'mom', 'level', 'noon', and 'race car'. Write a function called `palindrome` that takes in a string as an argument and returns `true` if it is a palindrome and `false` if it isn't. Do NOT use the `.reverse` method.

For example:
```js
palindrome('mom'); //true
palindrome('airplane'); //false
palindrome('kayak'); //true
```

### Unique Matrix
Write a function called `uniqMatrix` that takes in a matrix (aka array of arrays) of letters, and returns true if all of the letters in all of the matrices are true, and false if there are any duplicate letters in any of the matrices.

For example:
```js
uniqMatrix([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]); //returns true
uniqMatrix([['a', 'b', 'c'], ['a', 'e', 'f'], ['g', 'h', 'i']]); //returns false
```
<details>
	<summary> Best runtime: </summary>

  This can be solved in O(n^2) runtime.

</details>

### Product of all others
Write a function called `productOfAllOthers` that takes an array of numbers as an argument. It should return a new array where each number is replaced with the product of all other numbers multiplied together.

For example:
```js
productOfAllOthers([1, 2, 3, 4]);
//would return: [24, 12, 8, 6]
//by calculating: [2*3*4, 1*3*4, 1*2*4, 1*2*3]
productOfAllOthers([5, 2, 5, 10]);
//would return: [100, 250, 100, 50]
//by calculating: [2*5*10, 5*5*10, 5*2*10, 5*2*5]
```

<details>
	<summary> Best runtime: </summary>

  This can be solved in O(n) runtime.

</details>

### Highest product of three
Write a function called `highestProductOf3` that takes in an array of numbers as an argument. It return the highest possible product by multiplying any three of the numbers together. Keep in mind that it is possible to have negative numbers in the array:

```js
highestProductOf3([2, 3, 5, 0, 1, 10]); //returns 150, because of 3 * 5 * 10
highestProductOf3([10, -100, 10, -20, 5]); //returns 20000, because of -100 * -20 * 10
```

<details>
	<summary> Best runtime: </summary>

  This can be solved in O(n) runtime.

</details>
