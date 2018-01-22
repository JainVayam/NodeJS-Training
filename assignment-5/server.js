var express = require('express');
var bodyParser = require('body-parser');

var gettingUser = require('./getUser');
var deletingUser = require('./deleteUser');
var updatingUser = require('./updateUser');
var insertingUser = require('./insertUser');

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended : true })); 

var user = [ 
  {id : 1, fname : "Ron", lname : "Weas"},
  {id : 2, fname : "Har", lname : "Pott"}
];

gettingUser.getUser(app, user);
insertingUser.insertUser(app, user);
updatingUser.updateUser(app, user);
deletingUser.deleteUser(app, user);

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

 
