# Express

## Goals / Questions you should be able to answer
* What is routing?
* What is the difference between `app.use()` and `app.METHOD()`?
* What is the difference between the express `app` and express `router`?
* Explain what middleware is and does.


## How to read documentation
* Read the Getting Started or Guides if they exist
* Copy, paste, and run code examples
* Observe how the code behaves and match that behavior with what the documentation is saying


## Getting Started
[Documentation](http://expressjs.com/en/starter/hello-world.html)
```js
//sets up an instance of an express server
var express = require('express')
var app = express()

//any time the app receives a request with `/`, it'll generate a hello world response
app.get('/', function (req, res) {
  res.send('hello world!')
})

//app will handle requests coming in from localhost:8000
app.listen(8000, function () {
  console.log('server running on port 8000...')
})
```

## HTTP Verbs
[Documentation](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)<br/>
* GET
  * whenever you navigate to a website in your browser, you are actually sending a `GET` http request to that website's server  
  * earlier in class, we used AJAX to send `GET` http request without even know - the default http verb for AJAX is `GET`
  * tells the server to fetch information from the database
* POST
  * tells the server to create a new entry in the database
* PUT
  * tells the server to edit an entry in the database
* DELETE
  * tells the server to remove an entry in the database

## Basic Routing
[Documentation](http://expressjs.com/en/starter/basic-routing.html)<br/>
```js
app.get('/', function(req, res){
  res.send('i am a get request')
})
app.post('/', function(req, res){
  res.send('i am a post request')
})
app.put('/', function(req, res){
  res.send('i am a put request')
})
app.delete('/', function(req, res){
  res.send('i am a delete request')
})
```
The code above can be condensed using the `app.route()` function.
```js
const getCallback = (req, res) => {
  res.send('i am a get request')
}
const postCallback = (req, res) => {
  res.send('i am a post request')
}
const putCallback = (req, res) => {
  res.send('i am a put request')
}
const deleteCallback = (req, res) => {
  res.send('i am a delete request')
}
app.route('/')
  .get(getCallback)
  .post(postCallback)
  .put(putCallback)
  .delete(deleteCallback)
```

## Middleware
[Documentation](http://expressjs.com/en/guide/writing-middleware.html)<br/>
Middleware functions deal with the `request` and `response` objects. They can either end the request-response cycle or pass it along to another middleware function. A middleware function will more or less look like:
```js
function middleware(request, response, next) {
  // some code
}
```

## Application Middleware
### app.use()
```js
var app = express()

app.use(function (req, res) {
  res.send("hello world")
})
```

```js
app.use('/posts', function (req, res) {
  console.log('Request Type:', req.method)
  next()
})
```

### app.METHOD()
When the app receives a request with the HTTP verb that matches the method AND the path, the callback will be called.
```js
app.METHOD(path, callback)
```

```js
app.get('/', function(req, res) {
  res.send('hello world')
})
```

## express.Router() Middleware
```js
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('home page')
})
// define the about route
router.get('/post', function (req, res) {
  res.send('blog post')
})

module.exports = router
```
Configure your app to use the above router.
```js
var router = require('./router.js')
// ...
app.use('/path', router)
```
