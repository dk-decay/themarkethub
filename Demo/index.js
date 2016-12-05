'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test2');

var db = mongoose.connection;
mongoose.Promise = global.Promise;


var userSchema =  mongoose.Schema({
   // firstname : String,
   // lastname : String,
   // username : String,
    email: String,
    password: String,

});

var User = mongoose.model('User', userSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connected to MongoDB asdsad');

    app.post('/login', function(req, res) {
        console.log('received at server 123', req.body);
// email:req.body.email, password:req.body.password

    User.findOne({email : req.body.email, password: req.body.password},function(err, fetchedUsers){
        console.log("first printing 1");
        if(err) {

        console.error(err);
         res.status(550).json({message : 'Error Occurred'});

        } else if(!fetchedUsers) {

        console.error(err);
         res.status(551).json({message : 'No Users found'});

        } else {
              console.log("before printing 2 >>", fetchedUsers);
             res.json(fetchedUsers);
        }
      
    }) 

        // UserModel.findOne({email: req.body.email},
        // function(err, fetchedUser) {
        //     console.log('Printing result');
        //     console.log(fetchedUser.length);
        //     if(err) {
        //         console.log('Error occurred ', err);
        //          res.status(551).json({error : 'NOK-1'});
        //     }
        //     else if(!fetchedUser) {
        //             console.log('User not found ', fetchedUser);
        //              res.status(550).json({error : 'NOK'});
        //         }
        //         else {
        //         console.log('returning : ',fetchedUser);
        //         res.status(200).json(fetchedUser);
        //         }   
                
        // }
        
        // );


        // var obj = new User(req.body);
        // obj.save(function(err, obj) {
        //     if (err) return console.error(err);
        //     res.status(200).json(obj);
        // });
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


