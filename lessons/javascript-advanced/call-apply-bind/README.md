# Scope & `this`

## Constructor Review
```js
function Pokemon(name, type, level) {
  this.name = name
  this.type = type
  this.level = level
}

Pokemon.prototype.sound = function() {
  console.log("I AM A POKEMON")
}


var Button = React.createclass({
  something: function() {

  }
})



var pika = new Pokemon("pikachu", "electric", 5)
var pika = {}
pika.name = "pikachu"
pika.type = "electric"
pika.level = 5
pika = {name: "pikachu", type: "electric", level: 5}

var App = React.createClass({
  getInitialState: function() {

  },
  componentDidMount: function() {

  },
  componentWillMount: function() {

  },
  render: function() {

  }
})

ReactDOM.render(<App/>, document.getElementById('something'))
```
```js
var person = {
    var this = person
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        ​// Notice we use "this" just as we used "he" in the example sentence earlier?:​
        console.log(this.firstName + " " + this.lastName);
    ​// We could have also written this:​​
        console.log(person.firstName + " " + person.lastName);
    }
}
```

## Prototype Review
```js
function Cow(name) {
  this.name = name
}

Cow.prototype.sound = function() {
  return this.name + " goes moo"
}

function Pig(name) {
  this.name = name
  this.sound = function() {
    return this.name + " goes oink"
  }
}

var bess = new Cow("bessie")
var wil = new Pig("wilbur")
bess.sound.bind(wil)()
```

## Function.prototype.call
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) <br>
Immediately invokes the function with `this` defined as the first argument. Any subsequent argument serves as an argument for the actual function.
```js
someFunction.call(context, arg1, arg2, arg3..)
someFunction(arg1, arg2, arg3) // this is set as context
```
## Function.prototype.bind
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) <br>
Returns a function with `this` defined as the argument passed to `.bind()`. Does not invoke or call the function.
```js
someFunction.bind(context)
```
## Function.prototype.apply
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) <br>
Immediately invokes the function with `this` defined as the first argument. The array of arguments is passed to the actual function as arguments.
```js
someFunction.apply(context, [arg1, arg2, arg3..])
someFunction(arg1, arg2, arg3) // this is set as context
```

function add(a, b) {
  return a + b
}

var numbers = {a: 4, b: 5}
function add() {
  return this.a + this.b
}

# Exercises
## Q1 slice
Write a `slice` function that uses the `Array.prototype.slice` function to take arguments and convert the arguments to an array. **don't use a loop**
```js
slice(1, 2, 3, 4) //should return [1, 2, 3, 4]
```

## Q2 myBind
Write your own bind function using `this` and `apply`. Your bind function should behave exactly like the normal bind function.
```js
function StopLight() {
    this.name = "traffic light";
}

function stop() {
   console.log(this.name + " is red");
}

var light = new StopLight();

stop() //doesn't work b/c this.name is not defined

const firstStop = stop.bind(light);
const secondStop = stop.myBind(light);

firstStop(); // should log "traffic light is red"
secondStop(); // should log "traffic light is red"
```
