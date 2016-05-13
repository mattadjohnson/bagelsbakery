var express = require('express');
var http = require('http');

var app = express();

var httpPort = 9000;

app.use(express.static(__dirname + '/'));

app.use(function(err, req, res, next){
    console.error(err.stack || err.message);
    res.send(500, 'Server Error! ' + err.message);
});

http.createServer(app).listen(httpPort, function() {
    console.log('Listening for HTTP requests on port %d', httpPort);
});
