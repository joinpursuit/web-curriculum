- title: Objects and Arrays Deep Dive
- tags: javascript, objects

#Lecture
##Array indexes are always numbers
We always have to use a number index to access values out of arrays. We can store those numbers in variables, or even as some other value that will evaluate down to a number, but at the end of the day we need to use a number to access array values.

Examples:
```js
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
var arr2 = ['apple', 'banana', 'pear'];
var num1 = 3;
var num2 = 4;
var str1 = 'b';
var str2 = 'banana';

arr1[0]; // 'a'
arr1[3]; //'d'
arr2[2]; //'pear'
arr1[arr1.length - 1]; // 'f'
arr1[arr2.length - 1]; // 'c'
arr1[num1]; // 'd'
arr2[num2 - num1]; //'banana'
arr1[10 - num2 - num1]; // 'd'
arr2[4 - num2]; //'apple'
arr1[Math.min(1, num1)]; // 'b'
arr2[Math.max(2, (num1 * num2 - 12))]; //'pear'
arr1['a']; //undefined
arr1[str1]; //undefined
arr2[str2]; //undefined
```
##Exercises
- [Array loop exercises 1](array-loop-exercises-1.md)
- [Array loop exercises 2](array-loop-exercises-2.md)

##Objects vs arrays
Objects and arrays are similar. In fact, arrays are a subtype of objects (in other words, arrays are a type of object). Whenever we need to store a collection of data (aka a bunch of variables that are all similar or connected in some way) there's a good chance we'll need to use either an object or array.

However there's one key difference. The values in arrays have a *specific order*, while the values in objects don't necessarily have a specific order.

With that in mind, if you have a collection data that has a *specific order* you'll definitely want to use an array. Some examples include:
- a playlist of songs that you want to play in a specific order
- a to-do list, prioritized from least important to most important
- a list of your all-time favorite movies, ranked from 1-100
- instructions on how to put together a piece of furniture (with steps that need to happen in a specific order)

However if your data does not have a specific order, you can use either an object or an array.

Objects can include arrays, and vice versa. Arrays can also have arrays within them, and objects can have objects within them.

Examples:
```js
var arrOfObjs = [{title: 'I Heard it Through The Grapevine', artist: 'Marvin Gaye'}, {title: 'Bring It On Home To Me', artist: 'Sam Cooke'}, {title: "Let's Stay Together", artist: 'Al Green'}];

var objOfArrs = {grocery_list: ['bananas', 'apples', 'pears'], todo_list: ['clean my room', 'go to the grocery store', 'workout']};

var arrOfArrs = [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', ['h', 'i']]];

var objOfObjs = {person1: {name: 'Aaron', hometown: 'NYC'}, person2: {name: 'Crystal', hometown: 'LA'}, person3: {name: 'Francis', hometown: 'Chicago'}};

```
##Exercises
- [Arrays vs Objects](arrays-vs-objects-exercises-1.md)

##Array functions and methods
Like we mentioned earlier, arrays are actually just a subtype of object. So similar to other objets, there's an `Array` constructor function. The `Array` constructor function has a `.prototype` object, and there are a bunch of methods on that `.prototype` object. Since the methods are directly on the `.prototype` object they are shared by all instances of arrays.

For example, we could technically create a new empty array like this:
```js
var arr = new Array(); // []
```
But there's no real need to, because it's much easier to just do it like this, and results in the exact same thing:
```js
var arr = []; // []
```
The `Array.prototype` object contains a bunch of methods including things like `.slice`, `.indexOf`, and `.filter`, which is why we can use those methods on any new arrays we create.

All of the methods are really just functions. We could technically do everything that all the methods do by just writing our own functions from scratch. However methods make things easier and faster to perform common actions.

Some examples of common array methods:

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//The slice method selects a part of an array. You can pass in two indexes as arguments and it will select all of the values between those two indexes. It makes a copy of the old array (so does not mutate the original array) and returns a slice of that new copy
arr.slice(0, 2); //['a', 'b']
arr.slice(1, 3); //['b', 'c']
arr.slice(0); //['a', 'b', 'c', 'd', 'e', 'f']

//The push method lets you add things to the end of an array. You can also use the `unshift` method to add values to the beginning of an array
arr.push('g'); //['a', 'b', 'c', 'd', 'e', 'f', 'g']
arr.push('h'); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

//`indexOf` is commonly used to figured out if something exists within an array. You pass in the value you are searching for as an argument to `indexOf`. If it does exist in the array, `indexOf` will return that item's index. Otherwise it will return -1
arr.indexOf('b'); // 1
arr.indexOf('e'); // 4
arr.indexOf('a'); // 0
arr.indexOf('x'); // -1
arr.indexOf('dog'); // -1
arr.indexOf(3); // -1

//You can therefore use indexOf to figure out if an item is within the array, by doing something like this:
function existsInArr(arr, val){
  if(arr.indexOf(val) > -1) {
    return "It's in the array!";
  } else {
    return "It's not in the array..."
  }
}

existsInArr(arr, 'b'); //"It's in the array!"
existsInArr(arr, 'd'); //"It's in the array!"
existsInArr(arr, 'x'); //"It's not in the array...
existsInArr(arr, 'cat'); //"It's not in the array...

//There are also some higher level array methods that are abstractions for commonly performed operations, such as looping over an array. Some of these more abstract methods include `forEach`, `map`, `filter`, and `reduce.` For example, you can use forEach to loop over an array and do anything that you could do with a for loop:

//Looping over an array and console logging every value with a for loop:
for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//Looping over an array and console logging every value with forEach:
arr.forEach(function(val){
  console.log(val);
})

//Looping over an array and summing the values with a for loop:
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//Looping over an array and summing the values with forEach:
var arr = [1, 2, 3, 4, 5];
var sum = 0;
arr.forEach(function(num){
  sum += num;
})
```

##Exercises
- [Array methods exercises 1](array-functions-exercises-1.md)
- [Array methods exercises 2](array-functions-exercises-2.md)
