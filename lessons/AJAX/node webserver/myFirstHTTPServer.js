// lets require the http module so we can use it
var http = require('http');

//We need a callback function that receives requests and returns responses
function handleRequest(request, response){
    response.end('I am the response!!! ' + 'This ' + request.url + ' path got me here.');
}

// create an instance of a server passing it a callback function
var serverOne = http.createServer(handleRequest);

// lets have our server listen in on a particular port
// go to localhost:8000 in your browser
serverOne.listen(8000);


// lets start up a second instance of an http server
var serverTwo = http.createServer(function(request, response){
  // this time we're going to change the response according to the request
  if(request.url === '/'){
    // the 200 represents a HTTP status code
    // the content-type determines the format of the response
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Remy Boyz <strong>1738</strong>");
  } else if(request.url === '/trapqueen'){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>I'm like, Hey, what's up? Hello.</h1>");
  } else if(request.url === '/679'){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("I got a Glock in my 'rari, 17 shots, no .38");
  }
});

serverTwo.listen(1738);

//examples: Google, StreetEasy, Coalition for Queens, Facebook, Github
