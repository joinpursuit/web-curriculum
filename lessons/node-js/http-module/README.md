# Building servers using node's http module

## Objectives
- Be able to build a simple server that responds with a static `index.html` page
- Understand the basics of request and response

## Resources
- [Anataomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
- [Write Your First Node.hs HTTP Server](http://blog.modulus.io/build-your-first-http-server-in-nodejs)
- [HTTP: The Protocol Every Web Developer Must Know - Part 1](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
- [HTTP Headers for Dummies](http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039)
- [What is TCP/IP and How Does It Make the Internet Work?](http://www.hostingadvice.com/blog/tcpip-make-internet-work/)
- [Software Developer's Gudie to HTTP](http://odetocode.com/articles/743.aspx)

## http module
The `http` module lets you interact with the web. In other words, it lets you do things like make requests to websites and get back code and/or data in return, and create a simple web server to host your own web apps.

Here is an example of a simple server built using the `http` module:

```js
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello world");
  response.end();
});
server.listen(8000);
```

## Headers, Methods, and URL
- Headers are the core part of HTTP requests and responses, and carry information about the request and response
- Methods tell us the type of request, for example, "GET", "POST", "PUT", and "DELETE"
url module
- The URL tells us what is being requested, and is the key for communicating between clients and servers

## Request and response
Our client and server can talk with each other through requests and responses. Basically, the client sends out a request, and the server sends back a response.

The request object contains helpful properties, for things like headers, method, and url. We can use those properties directly, or save them as variables:

```js
var headers = request.headers;
var method = request.method;
var url = request.url;
```

Here are some of the key request and response methods:

Use `response.writeHead` to send back a header:
```js
response.writeHead(200, {"Content-Type": "text/html"});
```
Use `response.write` to send text, html, or a file back as a response:
```js
response.write("<h1>Response goes here</h1>");
```

Use `response.end` to signal the end of your response. You can also include text, html, or a file as an argument to `response.end` if you'd like:
```js
response.end();
```
Use `request.on` to get data from your request. You'd need to send a post request, or something similar, to include data along with your request:
```js
request.on('data', function(dataChunk){
  console.log(dataChunk.toString());
})
```

## http.request
We can also use the `http` module to make AJAX requests. Here's an example (from eloquent javascipt):
```js
var http = require("http");
var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, function(response) {
  console.log("Server responded with status code",
              response.statusCode);
});
request.end();
```
You can also use the npm [request](https://www.npmjs.com/package/request) module to make AJAX style requests in an even simpler way:
```js
var request = require('request');
request.post('http://localhost:8080', {form: 'this is some test data'});
```
## Exercises
- [http server exercises](http-exercises.md)

## Project
- [node personal website](node-personal-website/project/server.md)
