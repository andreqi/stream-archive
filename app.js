var nodejsx = require('node-jsx').install();

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = require('./app/app');
var _ = require('underscore');

var server = express();

var port = 1234;
server.listen(port);

server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'jade');

server.get('/galdos', function(req, res) {
    fs.readdir('./public/files/', function (err, files) {
        var props = {
            filenames: files.filter(function (file) {
                return file[0] != '.';
            }),
        };
        props = JSON.stringify(props);
        res.render('home', {
            component: app.start(JSON.parse(props)), 
            props: props,
        });
    });
});

