var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  //Saving our request URL as a variable so we can use it to do basic routing
    var url = request.url;
    console.log('URL', url);
    //Only need 'requst.on' if we have POST requests coming in to our site
    request.on('data', function(dataChunk) {
        console.log(dataChunk.toString());
    })
    //If statements to serve up different html files based on different request URLs
    if (url === '/page-2') {
        fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/') {
        fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/about') {
        response.write('Welcome to the about page')
        response.end();
    } else {
        response.write('<h1>404</h1><br><p>Page not found</p>');
        response.end();
    }
});
//Always be sure to do .listen() with a port number, or else our server won't run
server.listen(8080);
