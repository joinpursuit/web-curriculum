### Q1. my-type-of
Write a function `myTypeOf` that receives two arguments and returns true if the second argument matches the type of the first. The function should process all JavaScript data types.
````javascript
myTypeOf(1, "number") //returns true
myTypeOf("hi", "string") //returns true
myTypeOf([1, 2, 3, 4], "object") //returns true
myTypeOf(null, "boolean") //returns false
myTypeOf(true, "undefined") //returns false
````
### Q2. my-split
Write a function `mySplit` that receives a string and returns an array with each letter in the string argument. **BONUS: have the function receive a second argument so it behaves like the actual split function**
````javascript
mySplit("hello") //returns ['h', 'e', 'l', 'l', 'o']
````
### Q3. my-join
Write a function `myJoin` that receives an array and returns a string of all the array elements concatenated. **BONUS: have the function receive a second argument so it behaves like the actual join function**
````javascript
myJoin(['j', 'a', 'v', 'a']) //returns 'java'
````
### Q4. my-slice
Write a function `mySlice` that receives an array and one or two numbers and behaves exactly like the `slice()` function.
````javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = mySlice(fruits, 1, 3);
var noBanana = mySlice(fruits, 1)
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
// noBanana contains ['Orange', 'Lemon', 'Apple', 'Mango']
````
### Q5. my-splice
Write a function `mySplice` that receives an array and one or two numbers and behaves exactly like the `splice()` function. **DIFFICULT!!!**
````javascript
var fish = ['nemo', 'dory', 'bruce', 'marlin'];

// removes 0 elements from index 2, and inserts 'crush'
var removed = mySplice(fish, 2, 0, 'crush');
// fish is ['nemo', 'dory', 'crush', 'bruce', 'marlin']
// removed is [], no elements removed

// fish is ['nemo', 'dory', 'crush', 'bruce', 'marlin']
// removes 1 element from index 3
removed = mySplice(fish, 3, 1);
// fish is ['nemo', 'dory', 'crush', 'marlin']
// removed is ['bruce']

// fish is ['nemo', 'dory', 'crush', 'marlin']
// removes 1 element from index 2, and inserts 'darla'
removed = mySplice(fish, 2, 1, 'darla');
// fish is ['nemo', 'dory', 'darla', 'marlin']
// removed is ['crush']

// fish is ['nemo', 'dory', 'darla', 'marlin']
// removes 2 elements from index 0, and inserts 'nigel', 'anemone' and 'blue'
removed = mySplice(fish, 0, 2, 'nigel', 'anemone', 'blue');
// fish is ['nigel', 'anemone', 'blue', 'darla', 'marlin']
// removed is ['nemo', 'dory']
````
### Q6. my-pop
Write a function `myPop` that receives an array and behaves like `.pop()`.
````javascript
var numbers = [1, 2, 3, 4, 5]
myPop(numbers) //returns 5
//numbers is now changed to [1, 2, 3, 4]
````
### Q7. my-shift
Write a function `myShift` that receives an array and behaves like `.shift()`.
````javascript
var numbers = [1, 2, 3, 4, 5]
myShift(numbers) //returns 1
//numbers is now changed to [2, 3, 4, 5]
````
### Q8. my-push
Write a function `myPush` that receives an array and a second argument and behaves like `.push()`.
````javascript
var numbers = [3, 6, 9, 12]
myPush(numbers, 15) //returns 5 which is the new array length
//numbers is now changed to [3, 6, 9, 12, 15]
````
### Q9. my-unshift
Write a function `myUnshift` that receives an array and behaves like `.unshift()`.
````javascript
var numbers = [4, 6, 8, 10]
myUnshift(numbers, 1) //returns 5 which is the new array length
//numbers is now changed to [1, 4, 6, 8, 10]
````
### Q10. odd-or-even
Write a function `oddEven` that receives a number.
````javascript
oddEven(0) //returns 'even'
oddEven(1) //returns 'odd'
oddEven(4) //returns 'even'
oddEven(9) //returns 'odd'
````
### Q11. sum-to
Write a function `sumTo` that receives an array of numbers and a target number and returns true if two of the elements in the array add up to that target number.
````javascript
sumTo([3, 2, 3, 4, 9], 13) // returns true
sumTo([3, 2, 3, 4, 11], 12) // returns false
````
### Q12. capitalize-last-letter
Write a function `capLast` that receives a sentence string and capitalizes the last letter of each word.
````javascript
capLast('just keep swimming') //returns 'jusT keeP swimminG'
capLast('Hello World') //returns 'HellO WorlD'
````
### Q13. display-inline-vs-block
What is the difference between display: block and display: inline?


# Challenge Problems
### Q14. stock-prices
Write a function `stockPrices` that receives an array of numbers. The array of numbers represent the stock price at different points in the day. The function should output the largest profit that can be made. You can only sell at an index greater than the index you bought at.
````javascript
var prices = [10, 21, 4, 30, 60] //if you buy at 4 and sell at 60 you make the greatest profit
stockPrices(prices) //returns 56
````

### Q15. is-prime
Write a function `isPrime` that receives a number and returns true if it is a prime number.
````javascript
isPrime(7) // returns true
isPrime(9) // returns false
````

### Q16. three-arrays
Write a function `threeArrays` that receives three arrays and returns an array of elements that are found in all three.
````javascript
var first = [2, 6, 10, 15, 80, 99]
var second = [6, 23, 50, 80]
var third = [4, 6, 10, 23 42, 80, 99, 123]
threeArrays(first, second, third) //returns [6, 80]
````

### Q17. tic-tac-toe-winner
Write a function `tttWinner` that receives an array of three arrays with Xs and Os. It should return the winner if one exists.
````javascript
var boardOne = [
  ['X', 'O', 'O'],
  ['X', 'X', 'O'],
  ['O', 'X', 'O']
]
var boardTwo = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'X', 'O']
]
tttWinner(boardOne) //returns 'O is the winner!'
tttWinner(boardTwo) //returns 'Tie Game!'
````

### Q18. my-transpose
Write a function `myTranspose` that takes a matrix and returns a transposed matrix.
````javascript
var theMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
myTranspose(theMatrix)
//returns [
//  [1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9]]
````
