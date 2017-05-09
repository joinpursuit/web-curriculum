<!-- @acxbank javascript-this-output-7 -->
### Q1. javascript-this-output-7

What will be the output of the following code?

```javascript
var Animal = function (name, type) {
  this.kind = name,
  this.breed = type
}

var playground = {
  animals: [],

  addAnimal(animal) {
    this.animals.push(animal);
  },

  listAnimalKind(kind) {
    this.animals.forEach(function (animal) {
      if (animal.kind == kind) {
        console.log(animal.breed);
      }
    });
  }
}

playground.addAnimal(new Animal('dog', 'Labrador'));
playground.addAnimal(new Animal('dog', 'Goldren Retriever'));
playground.addAnimal(new Animal('rabbit', 'Angola'));
playground.listAnimalKind('dog');
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-8 -->
### Q2. javascript-this-output-8

What will be the output of the following code?

```javascript
var Dream = function (day, mood) {
  this.day = day;
  this.mood = mood;
};

var DreamFactory = {
  dreams: [],

  createDream: function (day, mood) {
    return new Dream(day, mood);
  },

  addDream: function (dream) {
    this.dreams.push(dream);
  },

  listDreams () {
    this.dreams.forEach (function (dream) {
      console.log('You dreamed a ' + dream.mood + ' dream on ' + dream.day);
    });
  }
};

DreamFactory.addDream(DreamFactory.createDream('Sunday', 'dark'));
DreamFactory.addDream(DreamFactory.createDream('Monday', 'funny'));

DreamFactory.listDreams();
```
<!-- end @acxbank -->
<!-- @acxbank javascript-constructors-1 -->
### Q3. javascript-constructors-1

1. Create a **constructor** function called `Hero` That will accept a variable **name** as an argument.
2. Use the **Hero** constructor to create an object **myHero** with the name 'Link'.

```
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this&new1 -->
### Q4. javascript-this&new1

Look over the below code. Then try to add yourself as a new `person` object, similar to how `myFather` and `myMother` are created.

```javascript
function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
```
<!-- end @acxbank -->
<!-- @acxbank song-object -->
### Q5. song-object

Create a constructor function called `Song.` `Song` should take in two arguments, `title` and `artist`, which should both be added as properties when the `Song` constructor function is used. The `Song` function should also have a method called `play` on its prototype. When called, the `play` function should console.log the name of that specific song preceded by the word 'Playing:'.

For example:
```js
var song1 = new Song('Time', 'Pink Floyd');
var song2 = new Song('Sweet Life', 'Frank Ocean');
var song3 = new Song('Intro', 'M83');
var song4 = new Song('Bloom', 'ODESZA');
var song5 = new Song('The Less I Know The Better', 'Tame Impala');

song4.play(); //logs 'Bloom'
song2.play(); //logs 'Playing: Sweet Life'
song3.play(); //logs 'Playing: Intro'
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this&new4 -->
### Q6. javascript-this&new4

Create a constructor function called cars (shown below). Fill in the blank parts in the constructor using `this`. The cars should have instance "brand","name","year" and "price". Also create 3 different objects using the constructor function, initialzing the instances whatever you want. 

```javascript
function cars() {
  // ...
}
```
<!-- end @acxbank -->
<!-- @acxbank javascript-constructors-2 -->
### Q7. javascript-constructors-2

1. Create a **constructor** function called `Hero` That will accept the arguments **name** and **occupation**.
2. Use **Hero.prototype** to add a method **whoAreYou** that will return: `My name is [the hero's name] and I am a [the hero's occupation]`.
3. Use the **Hero** constructor to create an object **hero1** with the name **Michaelangello** and occupation **Ninja**.
4. Use the **whoAreYou** method to log to the console **hero1**'s name and occupation.
``` 
```
<!-- end @acxbank -->
<!-- @acxbank javascript-constructors-3 -->
### Q8. javascript-constructors-3

Create a **constructor** function called **arrayString** that will take as argument an array. This constructor will **join** the array to a single string, and store the string in a variable called **str**. For example, the following code:

```javascript
var joined = new arrayString(['d','o','g']);
console.log(joined);
```

will log to the console:
```
{ str: 'dog' }
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this&new5 -->
### Q9. javascript-this&new5

Read over the following code. Then try to add Joffrey, Myrcella and Tomme into the House Lannister (Let's assume Jamie is not the father of these three childen).

```javascript
function House(symbol) {
  this.symbol = symbol;
  this.lord = undefined;
}
function Person(name) {
  this.name = name;
  this.children = null;
  this.parent = null;
}
Lannister = new House('lion');
Tywin = new Person('Tywin');
Tyrion = new Person('Tyrion');
Cersi = new Person('Cersi');
Jamie = new Person('Jamie');
Lannister.lord = Tywin;
Tywin.children = [Jamie, Cersi, Tyrion];
Jamie.parent = Tywin;
Cersi.parent = Tywin;
Tyrion.parent = Tywin;
console.log(Lannister);
console.log(Tywin);
console.log(Cersi);
```
<!-- end @acxbank -->
<!-- @acxbank javascript-constructors-5 -->
### Q10. javascript-constructors-5

As part of a calendar app, you will need to create an object that, for any given month, will store all the days in that month.

1. Create a constructor called `Day(year, month, day)` that will be given a number each for the month, the day and the year.
2. Create a function called `getDaysinMonth(year, month)` that will be given a number each for the month and the year. This function will return array of `Day` objects, which will be equal in length to the number of days in the given month.

For example:
```javascript
var daysInJune2016 = getDaysinMonth(2016, 3);
console.log(daysInJune2016)
```
will log to the console:
```
[ { month: 6, day: 1, year: 2016 },
  { month: 6, day: 2, year: 2016 },
  { month: 6, day: 3, year: 2016 },
  ...
  ...
  ...
  { month: 6, day: 28, year: 2016 },
  { month: 6, day: 29, year: 2016 },
  { month: 6, day: 30, year: 2016 } ]
```

**hint:** create a new **Date** object and use the `getDate` method to get the number of days in a given month. For additional help refer to the following links:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate

http://stackoverflow.com/questions/315760/what-is-the-best-way-to-determine-the-number-of-days-in-a-month-with-javascript
<!-- end @acxbank -->

