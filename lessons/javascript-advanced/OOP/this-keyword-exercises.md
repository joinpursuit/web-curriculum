<!-- @acxbank javascript-this-output-1 -->
### Q1. javascript-this-output-1

What will be the output of the following code?

```javascript
var bunny = {
  lovesCarrots: true,
  f: function () {
    return this.lovesCarrots;
  }
}

console.log(bunny.f())
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-3 -->
### Q2. javascript-this-output-3

What will be the output of the following code?

```javascript
var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.getName())
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this&new2 -->
### Q3. javascript-this&new2

Read the code below, what is the output of the console.log? Why? 
```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
console.log(o.f()); 
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-4 -->
### Q4. javascript-this-output-4

What will be the output of the following code?

```javascript
var golfGames = {
  tournament: "The Masters",
  players:
  [
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
  ],
  showAllGames: function () {
    currObject = this;
    this.players.forEach (function (player) {
      console.log(player.name + ' is playing at ' + currObject.tournament);
    })
  }
}

golfGames.showAllGames();
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-5 -->
### Q5. javascript-this-output-5

What will be the output of the following code?

```javascript
var player1 = {
  firstName: "Jack",
  lastName: "Black",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}

var player2 = {
  firstName: "Bunny",
  lastName: "Rabbit",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}

var game = {
  players: [],

  listPlayers: function () {
    this.players.forEach(function (player) {
      console.log(player.getName());
    });
  }
}

game.players.push(player1, player2);
game.listPlayers();
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-6 -->
### Q6. javascript-this-output-6

What will be the output of the following code?

```javascript
function setBodyTextColor(color) {
  this.body.style.color = color;
}

document.setBodyTextColor = setBodyTextColor;
document.setBodyTextColor("green");
document.setBodyTextColor("blue");

function getBodyTextColor(){
  return this.body.style.color;
}

document.getBodyTextColor = getBodyTextColor;
console.log(document.getBodyTextColor());
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-9 -->
### Q7. javascript-this-output-9

What will be the output of the following code?

```javascript
var Counter = {
   count: 0,
   add: function(){
     this.count++;
   }
}

Counter.add();
console.log(Counter.count);
var addToCount = Counter.add;
addToCount();
console.log(Counter.count);
```
<!-- end @acxbank -->
<!-- @acxbank javascript-this-output-10 -->
### Q8. javascript-this-output-10

What will be the output of the following code?

```javascript
var Counter = {
  count: 0,
  add: function(){
    this.count++;
  }
}

Counter.add();
console.log(Counter.count);

var AnotherCounter = {};
AnotherCounter.count = Counter.count;
AnotherCounter.add = Counter.add;
AnotherCounter.add();

console.log(AnotherCounter.count);
console.log(Counter.count)

var YetAnotherCounter = Counter;
Counter.add();
console.log(YetAnotherCounter.count)
```
<!-- end @acxbank -->



