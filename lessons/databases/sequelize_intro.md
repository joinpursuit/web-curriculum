# Sequelize.js

## Objectives
* Students will be able to refer to unfamiliar documentation
* Students will be able to build an express generated application


## Getting Started
[Sequelize/Express Example](https://github.com/sequelize/express-example)
```
$ npm install
$ npm start
```

## Converting to PostgreSQL and using Postico
[Sequelize Getting Started](http://docs.sequelizejs.com/en/latest/docs/getting-started/)
```
$ npm install --save pg pg-hstore
```

The dialect has to be set to `postgres`. Where do we set the dialect?! `config/config.json` Where is this config being used? Try to find it in the project folder.


[PostgreSQL](https://www.postgresql.org/download/macosx/) <br/>
[Postico](https://eggerapps.at/postico/)

## Play around with the app!
* Go to localhost:3000
* Make some users and some tasks.
* Open up Postico


## Questions
Below are some questions I had while trying to learn Sequelize and thought it would be good to frame a lesson around learning a new library.

### Question 1 - bin folder
`bin/www`<br/>
You'll notice a `www` inside of the bin folder. What is this file doing and what is calling or using this file? Use command + shift + `F` to search the entire project for `www`.

### Question 2 - express generator
So it turns out that the bin folder was created because of [express generator](https://expressjs.com/en/starter/generator.html)! Try setting up a dummy application using express generator.

### Question 3 - Sequelize
`bin/www` (line 23)<br/>
Okay, going back to the `www` file. On line 23, we see the following code:
```js
models.sequelize.sync()
```
Three things are unclear:
* models
* sequelize
* sync()
Where are we getting the `models` variable from?

### Question 4 - models
`models/index.js`<br/>
So, at the bottom of the `models/index.js` file, we are exporting `db`. Where is `db` getting its sequelize property from? Look up the `sync()` function now. What does the `sync()` function do?
**don't worry about the associate portion of the code, we'll get to it**

### Question 5 - sync()
`models/index.js`<br/>
The `sync()` function according to documentation syncs all defined models to the database. But how are we defining the models? What's the difference between Sequelize and sequelize in this file?

### Question 6 - file system
`models/index.js` (lines 16-21)<br/>
You'll see in the `models/index.js` that we are requiring the file system package from node. There are three functions being called on the `fs`:
* readdirSync()
* filter
* forEach
<br/>
Let's figure out what each of these functions are doing.

### Question 7 - sequelize.import
`models/index.js` (lines 16-21) <br/>
What does the `import` function do? How do you think the `import()` functions deal with `sync()`?

### Question 8 - task.js & user.js
`models/task.js & models/user.js` <br/>
How do you define a schema for a table in sequelize?
```js
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //...
      }
    }
  });

  return Task;
};
```
What are we exporting in each of the model files? Is it a callback? Where is it getting `sequelize` and `DataTypes` from? <br/>
How do we use `sequelize.define`? What's the first argument? Second argument?

### Question 9 - index route
Let's trace what happens when we navigate to `localhost:3000`. What API endpoint does the request reach? hint: start at the `www` file in the bin folder.

### Question 10 - render template
`routes/index.js` (line 9)<br/>
This particular example has template files that are displayed. Jade is pretty much old school React. See how the first argument is `index`? Express will look in the views folder for a file named `index.jade` and pass the second argument `object with information` to the index.jade file akin to React and state!

### Question 11 - create / destroy
Trace the steps the applications takes when creating or destroying a User or Task.

### Question 12 - redirect
Why do we need a redirect for every request with this project?



### Whiteboarding - Recursion Practice
1. Compute the factorial of a number N. fact(N) = N × (N −
1)...1.
```js
fact(8) // returns 40320 (8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
fact(3) // returns 6 (3 * 2 * 1)
```
2. Compute the sum of natural numbers until N.
```js
sumNat(8) // returns 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
fact(3) // returns 6 (3 * 2 * 1)
```
3. Write a function for multiply(a, b), where a and b are both positive integers, but you can only use the + or − operators.
```js
multiply(3, 4) //returns 12 (3 + 3 + 3 + 3) or (4 + 4 + 4)
```
4. Find Greatest Common Divisor (GCD) of 2 numbers using recursion.
```js
gcd(8, 24) // returns 8
gcd(64, 48) // returns 16 
```
5. Write a recursive function to reverse a string. Write a recursive function to reverse the words in a string, i.e., ”cat is running” becomes ”running is cat”.
