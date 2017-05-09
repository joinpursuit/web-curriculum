
## Q1. sort-an-array-of-numbers

### Question

Write a function named `sortArrNum` that takes in an array of numbers and returns the array sorted from lowest to highest.

Examples:
```javascript
sortArrNum([3, 5, 7, 1, 9, 0]);  // returns [0, 1, 3, 5, 7, 9]
```

### Answer

```javascript
function sortArrNum(arr) {
  return arr.sort(function(a, b){
    return a > b;
  });
}
```

## Q2. sort-an-array-of-strings

### Question

Write a function named `sortArrStr` that takes in an array of strings and returns the array sorted alphabetically.

Examples:
```javascript
sortArrStr(['cat', 'elephant', 'dog', 'walrus']);  // returns ['cat', 'dog', 'elephant', 'walrus']
```

### Answer

```javascript
function sortArrStr(arr) {
  return arr.sort();
}
```

## Q3. sort-a-string

### Question

Write a function named `sortStr` that takes in a string and returns a string of the letters sorted alphabetically.

Examples:
```javascript
sortStr('hello');  // returns 'ehllo'
sortStr('big apple'); // returns ' abegilpp'
```

### Answer

```javascript
function sortStr(arr) {
  return arr.split('').sort(function(a, b){
    return a > b;
  }).join('');
}
```

## Q4. reverse-an-array

### Question

Write a function named `arrReverse` that takes in an array of numbers and returns an array of numbers in the reverse order.

Examples:
```javascript
arrReverse([1, 2, 3, 4, 5]);  // returns [5, 4, 3, 2, 1]
```

### Answer

```javascript
function arrReverse(arr) {
  return arr.reverse();
}
```

## Q5. reverse-string-2

### Question

Write a function called `reverseStr` that uses the [`reverse`](http://www.w3schools.com/jsref/jsref_reverse.asp) method to reverse a string and return the reversed string. Do NOT use a typical loop; just use the `reverse` method.


Examples:
```js
reverseStr('hello'); //returns 'olleh'
reverseStr('when am i?'); //returns ?i ma nehw'
```

### Answer

```javascript
function reverseIt(str) {
  return str.split('').reverse().join('')
}
```

## Q6. sort-objects

### Question

Write a function named `sortObjs` that takes in an array of objects and sorts them alphabetically by their `name` property.

Examples:
```javascript
sortObjs([{name: 'lesane'}, {name: 'sean'}, {name: 'kendrick'}, {name: 'christopher'}, {name: 'young thug'}]);  // returns [{name: 'christopher'}, {name: 'kendrick'}, {name: 'lesane'}, {name: 'sean'}, {name: 'young thug'}]
```

### Answer

```javascript
function sortObjs(arr) {
  return arr.sort(function(a, b){
    return a.name > b.name;
  });
}
```

## Q7. high-low-sort

### Question

Write a function called `highLow` that uses the [`sort`](http://www.w3schools.com/jsref/jsref_sort.asp) method to sort an array of methods from high to low. 

Examples:
```js
highLow([1,2,3,4,5]); //returns [5,4,3,2,1]
highLow([10,5,11,2,6,7,26]); //returns [26,11,10,7,6,5,2]
```

### Answer

```javascript
function highLow(arr) {
  return arr.sort(function (a, b) {
    return b > a;
  })
}
```

## Q8. legal-drinking-age

### Question

Write a function named `checkDrinkingAge` that takes in an array of objects, each of which has a `name` property and `age` property. The function should return `true` if everyone's 21 or older, and should return `false` if anyone is under 21. 

Examples:
```javascript
checkDrinkingAge([{name: "Adrian", age: 33}, {name: "Jojo", age: 23}, {name: "Cornelius", age: 26}]);  // returns true
checkDrinkingAge([{name: "Tommy", age: 22}, {name: "Chucky", age: 24}, {name: "Lil", age: 20}]); // returns false
```

### Answer

```javascript
function checkDrinkingAge(arr) {
  return arr.every(function(obj){
    return obj.age >= 21;
  });
}
```

## Q9. implement-sort

### Question

Write a function named `sort` that takes in an array of numbers and sorts them in order from lowest to highest. Do not use the built in `.sort` array method in your answer.

Examples:
```javascript
sort([11, 2, 36, 4, 15]);  // returns [2, 4, 11, 15, 36]
```

### Answer

```javascript
arr = [2, 8, 3, 12, 6, 10, 4, 1];
function quicksort(arr){
    if(arr.length === 0) return arr;
    var left = [];
    var right = [];
    var pivot = arr[0];
    arr.forEach(function(num, index){
        if(index >0){
             if(num < pivot) left.push(num);
             else right.push(num);
        }
    })
    
    return quicksort(left).concat(pivot, quicksort(right));
}
```
