- title: JavaScript Objects Prototypes and Inheritance 
- tags: javascript, objects

# Resources
- [Intro to the `this` keyword](https://repl.it/Cjet/8)
- [JavaScript Objects](http://www.w3schools.com/js/js_object_definition.asp)
- [Object Prototypes](http://www.w3schools.com/js/js_object_prototypes.asp)
- [Understand JavaScript's `this` Keyword With Clarity](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

#Lecture
##The `this` keyword

Read over the following: [`this` keyword](https://repl.it/Cjet/10)

`this` is a special keyword in JavaScript that helps use reuse functionality with different objects. The value of the `this` keyword is assigned depending on where you call a function. The value of the `this` keyword will be the object that calls the function that contains `this`. In other words, `this` refers to whichever object is used to call it.


##Exercises: 
[`this` keyword exercises](this-keyword-exercises.md)

##Object constructors
Constructors are useful when you want to create multiple objects that all share similar properties or methods. 

Read the [Using an Object Constructor](http://www.w3schools.com/js/js_object_definition.asp) section and try to answer the following: 

- how do we create constructors?
- why are constructors useful?
- what does the `new` keyword do?
- what are some examples of built-in constructors in JavaScript?

##Object prototypes
Read the following: [Object Prototypes](http://www.w3schools.com/js/js_object_prototypes.asp)

And try to answer these questions:
- What is a prototype?
- How can we add methods and properties to a prototype?

##Exercises: 
[Constructor and prototype exercises](constructor-and-prototype-exercises.md)

##Bonus: `Object.create` vs `new` keyword
You can also use `Object.create` to create objects directly from an `Object.prototype`, without the need for a constructor function. 

Read more about `Object.create` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

##Project: 
[Pokemon lite](pokemon-lite.md)
