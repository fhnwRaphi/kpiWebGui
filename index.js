var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.write('<h1>Hallo</h1>');
    response.end('        <!doctype html><html class="no-js" lang="">    <head>        <meta charset="utf-8">        <meta http-equiv="x-ua-compatible" content="ie=edge">        <title></title>        <meta name="description" content="">        <meta name="viewport" content="width=device-width, initial-scale=1">        <link rel="stylesheet" href="css/normalize.css">        <link rel="stylesheet" href="css/main.css">		<script src="js/vendor/modernizr-2.8.3.min.js"></script>    </head>    <body>		<div style="width: 60%;">        <canvas id="lineChart" height="400" width="400"></canvas>		</div>		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.js"></script> <!-- chartjs libeary hinzugef�gt -->        <script src="js/main.js"></script>		<img src=index.jpg>    </body></html>'
        
        );

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
