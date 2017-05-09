# Fundamentals Deep Dive

## Constructor Functions
[MDN Reading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
Read the following sections:
1) the object(class instance)
2) the constructor
3) the property(object attribute)
4) the methods

```js
function Jedi(name) {
  this.name = name
  this.quotes = {
    Luke: "I am a Jedi, like my father before me.",
    Yoda: "Do. Or do not. There is no try.",
    ObiWan: "It's over Anakin, I have the high ground."}
}

Jedi.prototype.say = function() {
  console.log(this.quotes[this.name])
}

var luke = new Jedi("Luke")
var yoda = new Jedi("Yoda")
var obiwan = new Jedi("ObiWan")

// luke starts off as an empty object
var luke = {}
// luke.__proto__ is set to Jedi.prototype granting it access to the Jedi constructor function. this is set to luke
this = luke
luke.name = "Luke Skywalker"
luke.father = "Darth Vader"
```

Constructor functions are similar to parents. They give birth to instances.
For example, when you call `newCountry('USA')`, you're creating a new object that inherits certain characteristics such as name, cities, leader.

## this and that
[this and that reading](http://stackoverflow.com/questions/4886632/what-does-var-that-this-mean-in-javascript)


## Prototype
```js
function City(name, pop) {
  this.name = name
  this.population = pop
}

function Country(name) {
  this.name = name
  this.cities = []
  this.leader = ""
}

Country.prototype.addCity = function(city) {
  this.cities.push(city)
}

Country.prototype.elect = function(person) {
  this.leader = person
}

Country.prototype.census = function() {
  for(var i = 0; i < this.cities.length; i++) {
    var city = this.cities[i]
    console.log(city.name + " has " + city.population + " people.")
  }
}

```

## __proto__
```js
var usa = new Country("United States of America")
usa.elect("Hillary Clinton")
// does the usa object have the elect function? No?
usa.__proto__ === Country.prototype
// so it will dig into its __proto__ which references Country.prototype
Country.prototype  
// Country.prototype does actually have this function and it'll use it.

```

## Bind
```js
function identify() {
  console.log(this.id)
}

function Superhero(name, id) {
  this.name = name
  this.id = id
}

var spiderman = new Superhero("Spiderman", "Peter Parker")

var reveal = identify.bind(spiderman)

```


## Callbacks
SETTIMEOUT
SETINTERVAL


helper function
```js
function addSurname(name, surname){
  console.log(name + ' ' + surname)
}  

function fullName(members, surname, callback) {
  for(var i = 0; i < members.length; i++) {
    callback(members[i], surname)
  }
}

fullName(['Arya', 'Sansa', 'Bran'], 'Stark', addSurname)

```




# Exercises

## Q1
Write a constructor function `Sith` with a name and quotes properties.
Create an instance of `Sith` named `darthvader`.
When you call `darthvader.say()`, it should log: 'No, I am your father.' using the quotes property.

## Q2
Write a constructor function `Number` with a value property.
Write prototype functions `add`, `subtract`, `multiply`, `divide`, `remainder` that all receive a single argument.

var num = new Number(8)
num.add(6) // num.value is set to 14
num.subtract(3) // num.value is set to 11
num.multiply(4) // num.value is set to 44
num.divide(2) // num.value is set to 22
num.remainder(5) // num.value is set to 2

## Q3
```js
function Student(name) {
  this.name = name
  this.courses = []
}

function Course(name) {
  this.name = name
  this.students = []
}

var lit, music, chem, math, acting
var matt, ernest, isaac, albert, ludwig, kanye, haruki, jd

lit.enroll(matt, ernest, albert)
//should put matt, ernest, and albert into the lit.students
//should also put lit in matt, ernest, and albert's courses
```
Classes: Literature, Music, Chemistry, Geometry, Theater
People: Matthew Damon, Ernest Hemingway, Isaac Newton, Albert Einstein, Ludwig van Beethoven, Kanye West, Haruki Murakami, JD Salinger

## Q4
[Canvas Prototype Demo](https://github.com/ckuang/canvasdemo)
