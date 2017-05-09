# How to start up a simple server

## Step 1
`npm install http` and require in your JavaScript file.
```js
var http = require('http');
```

## Step 2
Create an instance of a server passing it a callback function.
```js
var server = http.createServer(handleRequest);
```

## Step 3
We need a callback function that receives a request and a response as arguments.
```js
function handleRequest(request, response){
  response.end('The ' + request.url + ' path got me here.');
}
```

## Step 4
We need to server to listen in on a port.
```js
server.listen(8000);
```

## Step 5
The `200` represents a HTTP status code and the `Content-Type` determines the format of the response.
```js
response.writeHead(200, {"Content-Type": "text/html"});
response.writeHead(200, {"Content-Type": "text/json"});
```

# Exercise
Spin up a local server on your computer.
* Have the root page return the name of your favorite musician.
* Make three urls with the name of songs.
* Have the page show some lyrics for each song.
