var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended : true })); 
var user = [ 
  {fname : "Ron", lname : "Weas", id : 1},
  {fname : "Har", lname : "Pott", id : 2}
];
var gettingApp = require('./getApp');
gettingApp.getApp(app, user);
var deletingApp = require('./deleteApp');
deletingApp.deleteApp(app, user);
var updatingApp = require('./updateApp');
updatingApp.updateApp(app, user);
var insertingApp = require('./insertApp');
insertingApp.insertApp(app, user);
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

 
