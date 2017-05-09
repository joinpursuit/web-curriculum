var http = require('http');
var fs = require('fs');

//Setting up the server
var server = http.createServer(function(request, response){
  //Get our url
  var url = request.url;
  //create an if/else for different URLs
  //Setup our first if statement for our '/' page (home page)
  if(url === '/') {
    //todo: use fs to read our index.html page and write it to browser
    fs.readFile('index.html', function(err, data) {
      response.write(data);
      response.end();
    })
  } else if(url === '/page-2') {
    //todo: use fs to read our page-2.html page and write it to browser
  } else if(url === '/page-3') {
    //todo: use fs to read our page-3.html page and write it to browser
  }
  else if(url === '/main.css') {
    fs.readFile('main.css', function(err, data) {
      response.write(data.toString());
      response.end();
    })
  } else {
    response.write('<h1>404</h1>');
    response.end();
  }
  //Write the data from our index.html file to our page
  //If the HTML page has links/scripts we also need to serve those

});
//Listening on port 3000
server.listen(3000);
