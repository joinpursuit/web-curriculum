var http = require("http");
var fs = require('fs');
var server = http.createServer(function(request, response) {
    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    console.log('REQUEST HEADER', headers);
    console.log('REQUEST METHOD', method);
    console.log('REQUEST URL:', url);
    request.on('data', function(chunk){
      console.log('DATA', chunk.toString())
    })
    if (url === '/test') {
        fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-2') {
        response.write('Hello from page 2');
        response.end();
    } else {
        response.write('<h1>Hello world</h1>');
        response.write('<h1>Goodbye world</h1>');
        response.end();
    }

});
server.listen(8080);
