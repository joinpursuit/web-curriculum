var http = require("http");
var fs = require("fs");
var mime = require('mime');
var PORT = 8000;

var server = http.createServer(function(request, response) {
    if (request.method === "GET") {
        console.log('\n', request.url)
         var contentType = '';
        // Default address, sending back the home page
        if (request.url === "/") {
            // Getting the content type for an html file
            contentType = mime.lookup("html");
            // Sending the index.html file
            sendFile(request, response, "website/index.html", contentType);
        } else {
            // Getting the content type for the file that was requested
            contentType = mime.lookup("website" + request.url);
            // Sending the requested file
            sendFile(request, response, "website" + request.url, contentType);
        }

    }

});

// Send a file to the client
// Arguments: request, response, path of file, content type
function sendFile(request, response, filePath, contentType) {
    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.log(err)

            return;
        }
        response.writeHead(200, {
            'Content-Type': contentType
        });
        response.write(data);
        response.end();
    });
}

server.listen(PORT, function() {
    console.log('server listening on port ' + PORT);
});
