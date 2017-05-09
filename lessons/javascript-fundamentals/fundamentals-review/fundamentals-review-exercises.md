## w5d1

### Q1
Write a function `sumArgs` that is able to handle an unlimited number of arguments. It will sum all of the arguments even if they are numbers in the form of a string. Write two solutions: one using a for loop and the other using a while loop.

```js
sumArgs(5, '8', 3, '7') // returns 23
sumArgs() // returns 0
sumArgs('4', '2', 1) // returns 9
```

### Q2
Write a function `isPrime` that receives a number `N` and returns true if the number is prime and false if it is not. A prime number is a number that is only divisible by 1 and itself. Therefore, you need to check that every number smaller than `N` doesn't divide evenly into `N` except for 1. Write two solutions: one using a for loop and the other using a while loop.

```js
isPrime(7) //returns true
isPrime(8) //returns false
```

### Q3
Write a function `searchNum` that iterates through a sorted array and returns the target number if found. The function should also log each iteration to the console.
```js
var ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
searchNum(8) //returns 8
```
What shows up in the console?

### Q4
['G', 'PG', 'PG-13', 'R', 'NC-17']
Write a function `whatMovies` that receives an age and returns an array of all the movies that age can watch. Write two solutions: one using if...else, the other using switch... case
```js
whatMovies(8) // returns ['G', 'PG']
whatMovies(80) // returns ['G', 'PG', 'PG-13', 'R', 'NC-17']
```

### Q5
Write a function `numDups` that receives an array and counts the number of duplicates that exist in the array. Write two solutions: for and while

```js
numDups([5, 8, 2, 3, 9, 10, 8, 3]) //returns 2
numDups([1, 2, 3, 4]) //returns 0
```

### Q6
Do these two expressions do the same thing? Why or why not?
```js
3 === 3
3 == 3
```

### Q7
Write a function `reverseWords` that reverse the words in a string. Two solutions: for and while
```js
reverseWords('We must be swift as a coursing river')
// returns "eW tsum eb tfiws sa a gnisruoc revir"
```
