# Setting up server.js file
Our server will need two main things to get started: a connection to our database, and a `listen` function that gets our server up and running and listening on a localhost port.

# Connecting to a database
- [Mongoose quick start docs](http://mongoosejs.com/docs/)

```js
const mongoose = require('mongoose');
//Whatever you put after 'localhost/' will automatically be the name of your database. In this case, the database will be named 'test'. You should name your databases based on the project you're working on
mongoose.connect('mongodb://localhost/test');
```
# Getting started with Express
Using express to listen on port 4444:

```js
const express = require('express');
//Initialize our express app and save it as `app` variable
const app = express();

app.listen(4444, () => {
  console.log('App listening on port 4444');
});
```

# Putting the database and server together
We will need to make sure our database has connected before we start our server. There are multiple ways to do this, but one simple way is to use an `on` listener method to start the server in a callback after the database connection is open.

It's important to note that we'll eventually need to require in our Mongoose models here BEFORE we create our express server, in order for our database to run correctly: 

```js
const mongoose = require('mongoose');
const express = require('express');
const app = express();
//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');
//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
  app.listen(4444, () => {
    console.log('App listening on port 4444');
  });
});
```
