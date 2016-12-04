'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test2');

var db = mongoose.connection;
mongoose.Promise = global.Promise;


var userSchema = mongoose.Schema({
    email: String,
    password: String,

});

var User = mongoose.model('User', userSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connected to MongoDB');

    app.post('/login', function(req, res) {
        console.log('received at server', req.body);
        var obj = new User(req.body);
        obj.save(function(err, obj) {
            if (err) return console.error(err);
            res.status(200).json(obj);
        });
    });



});
app.get('/node_modules*', function(req, res, next) {
    res.sendFile(path.join(__dirname + req.url));

});
app.get('/app*', function(req, res, next) {
    res.sendFile(path.join(__dirname + req.url));

});


app.get('/test', function(req, res) {
    console.log('getting data from server');
    res.json({ result: 200 });

});


//app.use('/', express.static(__dirname+'/app'));

app.get('/marketplace/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);



