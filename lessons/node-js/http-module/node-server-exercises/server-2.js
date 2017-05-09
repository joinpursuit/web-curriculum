var http = require('http');
// The h1 element should say 'Welcome to My Site' and the p element should say 'Content coming soon...'.
var server = http.createServer(function(request, response){
  response.write('<h1>Welcome to my site</h1>');
  response.write('<p>Content coming soon...</p>');
  reponse.end();
})

server.listen(3000);
