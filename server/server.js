var express = require('express');
var expressInvoked = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/speakEzUsers');
var http = require('http');
var middleware = require('./config/middleware.js');
var rtcSignaler = require("signalerService");
var server = require('http').Server(expressInvoked)
rtcSignaler(server);
var config = {
	port: 1337
}


middleware(expressInvoked, express); //sams middleware

server.listen(config.port, function () {
	console.log('Application listening on port:', config.port);
});
<<<<<<< HEAD

module.exports = app;
=======
>>>>>>> b791fef13564a2c5e2c4401d84235892537d505e
