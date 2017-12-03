var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    fs.readFile('index.html', function (err, html) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    });
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);