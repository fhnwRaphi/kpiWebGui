var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<img src="pic/index.jpg">');
        response.end();
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);