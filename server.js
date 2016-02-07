var express = require('express');
var https = require('https');
var http = require('http');

var app = express();

//var httpPort = 10549;
var httpsPort = 10337;
var privateKey = '../server.key';
var publicCert = '../cert.pem';

var httpsOptions = {
	key: privateKey,
	cert: publicCert
};

app.use(express.static(__dirname + '/'));
//app.use('/', express.static(__dirname + '/'));

app.use(function(err, req, res, next){
    console.error(err.stack || err.message);
    res.send(500, 'Server Error! ' + err.message);
});

// http.createServer(app).listen(httpPort, function() {
// 	console.log('Listening for HTTP requests on port %d', httpPort);
// });

https.createServer(httpsOptions, app).listen(httpsPort, function() {
	console.log('Listening for HTTPS requests on port %d', httpsPort);
});
