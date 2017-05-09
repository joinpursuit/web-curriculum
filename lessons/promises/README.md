# Intro to Promises

Promises are a way of handling asynchronous events. Promises are used for planning a future response to a function call. They are an alternative to callbacks and can be used to accomplish basically anything that callbacks can be used for.

A promise basically wraps a function, and creates an if...else statement with two possible results: a 'resolved' result if the original function worked, and a 'rejected' result if the original function didn't work.

You can think of promises this way: say you go to a bakery and order a cake. The baker will then **promise** to either give you the cake in 3 days, OR give you a refund if for some reason he's unable to do it in time.

Let's take a look at how that would work in code:

```js
const orderCake = new Promise(function(resolve, reject) {
  if(cakeOnTime) {
    resolve("Here's your cake!");
  } else {
    reject("Sorry, here's your refund...")
  }
})

let cakeOnTime = true;

orderCake.then((result) => console.log(result), (err) => console.log(err)); //"Here's your cake!"

cakeOnTime = false;

orderCake.then((result) => console.log(result), (err) => console.log(err)); //"Sorry, here's your refund..."
```

Let's look at a couple of other examples:
```js
const numTimeout = new Promise(function(resolve, reject) {
  let num = Math.floor(Math.random() * 100);
  if(num > 50) {
    resolve('Num is greater than 50! ' + num);
  } else {
    reject('Sorry, number too small: ' + num)
  }
})

numTimeout.then((result) => console.log(result), (err) => console.log(err));
```

Here's an example of a fake AJAX call with a very simplified version of how AJAX calls are built to use promises:
```js
const fakeAJAXCall = new Promise(function(resolve, reject) {
  //the below 'setTimeout' is similar to an asynchronous AJAX call
  setTimeout(() => {
    if(successfullyRetrievedData) {
      resolve(data);
    } else {
      reject('Error, could not retrieve data...')
    }
  }, 1000);
})

fakeAJAXCall.then((result) => console.log(result), (err) => console.log(err)); //JSON data or error message
```
## .then
All promises have a `.then` method which can be used to access the resolved or rejected value of the promise. `.then` takes two separate functions as arguments: the first function receive the 'resolved' value, and the second function receive an 'error' value if there is one:

```js
const orderCake = new Promise(function(resolve, reject) {
  if(cakeOnTime) {
    resolve("Here's your cake!");
  } else {
    reject("Sorry, here's your refund...")
  }
})

orderCake.then((result) => console.log(result),(err) => console.log(err));
)

//Another way of writing the same .then statement:
orderCake.then(
  (result) => console.log(result),
  (err) => console.log(err)); //"Here's your cake!"
)

//The same thing using ES5 functions:
orderCake.then(
  function(result){
    console.log(result);
  },
  function(err){
    console.log(result);
  }; //"Here's your cake!"
)

//Example of same .then statement with functions separated out:
const handleResolve = (result) => console.log(result);
const handleReject = (err) => console.log(err);
orderCake.then(handleResolve, handleReject);
```

## Chaining promises
You can chain promises onto each other by adding multiple `then` statements. Whatever you return from the previous promise will be the value for the next promise:
```js
const prom = new Promise((resolve, reject) => {
  resolve('First value')
});

prom.then((val) => {
  console.log(val); //'First value'
  return 'Second value';
}).then((val) => {
  console.log(val); //'Second value'
  return 'Third value';
}).then((val) => {
  console.log(val); //'Third value'
  return 'Third value';
}).then((val) => {
  console.log(val); //'Fourth value'
  return 100;
}).then((val) => {
  console.log(val); //100
})
```

Here's an example of chained promises in Mongoose:
```js
Room.findById(req.params.roomId)
    .then((room) => room.addUser(req.body.userId))
    .then((room) => {
        res.status(204).json(room)
    })
    .then(null, next)
```

## Error handling
You can pass 'null' in as the first argument to a `.then` method at the end of a chain to catch all errors. If you do not pass in a second argument to your `.then` methods, any errors will be passed down the chain until there is a `.then` method that actually has a second argument. Therefore you don't have to worry about checking for errors until the last `.then` method in a chain. However it is very important that you do have an error catching `.then` statement because without one your errors will be silent and will not be logged to the console:
```js
prom.then((val) => {
  console.log(val); //'First value'
  return 'Second value';
}).then((val) => {
  console.log(val); //'Second value'
  return 'Third value';
}).then(null, (err) => {
  if(err) console.log(err);
})
```

You can also use a `.catch` statement for catching errors. `.catch` is just an alias for a `.then` statement with a `null` first argument:

```js
prom.then((val) => {
  console.log(val); //'First value'
  return 'Second value';
}).then((val) => {
  console.log(val); //'Second value'
  return 'Third value';
}).catch((err) => {
  if(err) console.log(err);
})
```

## Exercises
[Node School Promises](https://github.com/stevekane/promise-it-wont-hurt)

## Resources
- [ES6 Promises (The Basics)](http://www.datchley.name/es6-promises/)
- [ES6 Promises Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
