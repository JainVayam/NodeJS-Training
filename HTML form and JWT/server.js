const mongoose = require ('mongoose');
const express = require("express");  
const bodyParser = require("body-parser");  
const routes = require('./router/router')
const db = require('./databaseConfig')
const jwt = require('jsonwebtoken')
const User = require('./model/user')

db();

// const testUser = new User({
//   firstName: "ABC",
//   lastName: "Jain1",
//   email: "vjain@gmail.com",
//   username: "abc1234",
//   password: "Vjain12345"
// })

// console.log("adding")

// testUser.save((err) => {
//   if(err) console.log("an error has occured",err);
// })

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true})); 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

global.router = express.Router();

app.use('/', router)
routes.router();

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});
