var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log(response);
});


server.listen(8080, 'localhost');