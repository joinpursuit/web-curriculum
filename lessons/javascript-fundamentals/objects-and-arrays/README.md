- title: JavaScript Fundamentals: Intro to Objects
- tags: javascript, objects

# Objectives
* Be able to define basic objects and access properties
* Explain the difference between objects and arrays
* Be able to use slice, push, and pop methods to manipulate arrays 

# Resources
- [W3 JavaScript Intro to Objects](http://www.w3schools.com/js/js_objects.asp)
- [W3 JavaScript Array Methods](http://www.w3schools.com/jsref/jsref_obj_array.asp)
- [Working With Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#Lecture
##Into to objects
Objects are essentially lists of key/value pairs. 

Objects are similar to arrays, except each value in an object has an explicit 'key', instead of an index. 

We can access object values by their keys by using either 'dot' notation or brackets.

Object examples:
```js
var usernamesAndPasswords = {nsync4lyfe: "xsdw33", ledzeppelin279: "zep745", boring_username: "df3rds", jimbo233: "uwe9292"}
```

```js
var favoriteFoods = {john: "ice cream", sarah: "steak", liz: "pizza"}
```

##Demo: Intro to objects
- Defining an object using brackets
- Accessing properties in objects using both dot notation and brackets
- Different types of object keys (i.e. strings, variables, numbers)
- 'Methods' and storing functions in objects
- Looping over objects
- Math object

##Exercises
[Object exercises](objects-exercises.md)

##Arrays vs Objects
**Discussion** What’s are the differences between arrays and objects? What are some situations where we should use an array instead of an object? Vice versa?

##Demo: Arrays vs Objects
- Storing similar data in array vs object
- Creating an array of objects
- Creating an object with arrays

##Array methods
Array methods are essentially functions that are built into certain objects (in this case, the `Array` object). 

##Demo: Basic array methods
- `slice` / `splice`
- `push` / `unshift`
- `pop` / `shift`
- `concat`
- `join`
- `indexOf`

##Exercises
[Array exercises](array-methods-exercises.md)
