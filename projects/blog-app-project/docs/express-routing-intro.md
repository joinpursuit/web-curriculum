# Hello World
Express is a really popular framework for building servers and APIs using Node.js. Let's dive right in and checkout a 'Hello World' example in Express:

- [Express Hello World Docs](https://expressjs.com/en/starter/hello-world.html)

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

# Basic routing
Here's some info on how to do basic routing in Express:
- [Express Basic Routing](https://expressjs.com/en/starter/basic-routing.html)

# Routing docs
And here are some more helpful docs:
- [Express Routing Docs](https://expressjs.com/en/guide/routing.html)
- [Modularize your Routes with Express Router](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)
- [Understanding Express JS From Bottom Up](https://evanhahn.com/understanding-express/)
