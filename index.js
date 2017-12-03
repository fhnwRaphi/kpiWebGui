var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
    response.write('<h1>Hallo</h1>');
    response.end("Hello World! KpiWebGui");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
