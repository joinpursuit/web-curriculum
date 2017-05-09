- title: JavaScript Fundamentals: Types, Strings, and Numbers
- tags: javascript, numbers, strings, types

# Objectives
* Be able to name the six JavaScript types
* Know how to use `typeof` to identify type
* Know how to use slice, toUpperCase/toLowerCase, split, and indexOf to manipulate strings
* Be able to use `Math` object's `ceil` / `floor`, and `random`

# Resources
- [JS Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JS Math Operators](http://www.w3schools.com/jsref/jsref_operators.asp)
- [JS Number Methods](http://www.w3schools.com/js/js_number_methods.asp)
- [JS Math Object](http://www.w3schools.com/js/js_math.asp)
- [JS String Methods] (http://www.w3schools.com/jsref/jsref_obj_string.asp)

#Lecture
##How to approach problem solving
**Discussion:** How do we break down problems? How do we approach problems that we haven't seen or don't know to solve?**

- What are the inputs and ouputs? (Aka what are the arguments and what do I need to return?)
- What are some example inputs and outputs?
- What different strategies do I have?
- Write it out
- Use console.log
- Google it (but be careful about copying and pasting)

##Intro to JavaScript types
JavaScript has six data types: strings, numbers, booleans, objects, undefined, and null. 

In some languages you need to specifically declare data types, but JavaScript is dynamic, which means you do not need to explicity declare the type.

You can check the type of any piece of data by using the `typeof` keyword. For example, `typeof 'test'` would return `'string'`, and `typeof 5` would return `'number'`.

Watch out for type coercion - if you mix two pieces of data that are different types, the JavaScript engine may try to change them both to the same type behind the scenes. 

##Demo: Data types
- `typeof` operator
- Type coercion


##Numbers
Numbers are also a 'primitive' JavaScript data type. Unlike some other languages, JavaScript only has one type of number. Let's dive right in and# get some experience with basic number manipulation.

##Demo: Number manipulation
- [math operators](http://www.w3schools.com/jsref/jsref_operators.asp)
- `pareseInt`
- `Math` object
  - `ceil` / `floor`
  - `random`
  - `abs`
  - `pow` / `sqrt`
- `NaN` /`typeof NaN`
- `Infinity`

##Exercises
[Numbers exercises](numbers-exercises.md)


##Strings
Strings are one of five 'primitive' JavaScript data types. Strings are fundamental to almost everything we do in JavaScript, so good string manipulation skills are crucial.

##Demo: String manipulation
- `indexOf`
- `substring`
- `toUpperCase` / `toLowerCase`
- `charAt` / `charCodeAt`
- `split`
- `length`

##Exercises
[String exercises](types-and-strings-exercises.md)