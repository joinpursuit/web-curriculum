# Objectives
- Understand how to use spread operator instead of arguments object
- Understand How to use spread operator to copy arrays

# Spread operator

```js
//The spread operator takes values in an array and 'spreads' them out into individual values
let arr = ['cat', 'dog', 'porcupine'];
//While console.logging the array itself will log out the entire array:
console.log(arr); //[ 'cat', 'dog', 'porcupine' ]
//Using the spread operator will log out each value individually:
console.log(...arr); //cat dog porcupine

//We can use the spread operator to translate an array into individual arguments. For example, the below function expects three individual numbers as arguments:
let add = (num1, num2, num3) => num1 + num2 + num3;
//If we try to pass it an array, our function will not work:
let numArr = [10, 2, 30];
add(numArr); //'10,2,30undefinedundefined'
//But we can use the spread operator to 'spread' out the values of the array and pass them in as arguments one by one:
add(...numArr); //42

//We can use the spread operator to make combine arrays together, and make copies of arrays:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); //[1, 2, 3, 4, 5, 6]
let arr4 = [-2, -1, 0, ...arr1];
console.log(arr4); //[-2, -1, 0, 1, 2, 3]
let arr1Copy = [...arr1];
console.log(arr1Copy); //[1, 2, 3]


//We can use the spread operator to capture all arguments, and store them in an array
let logArgsArray = (...args) => {
  console.log(args);
};

let logArgsOneByOne = (...args) => {
  args.forEach(arg => {
    console.log(arg);
  })
};

//We can also use the spread operator to capture extra arguments
let sumAtLeastTwo = (num1, num2, ...otherNums) => otherNums.length > 0 ? num1 + num2 + otherNums.reduce((a, b) => a + b) : num1 + num2;
```

# Default Parameters
```js
//ES6 adds a 'default parameters' option. We can give our function arguments default values by using an '=' sign in our function definition:
let add = (num1 = 0, num2 = 0) => num1 + num2;
//If we pass in arguments, our arguments will take precedence over the default parameters:
add(1, 2);//3
//But if we don't pass in all of the expected arguments, the default parameters will come into effect:
add(); //0
add(1); //1
```
# Exercises
-[Practice exercises](spread-operator-practice-exercises.md)
