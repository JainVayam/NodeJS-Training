const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');    
const routes = require('./router/router');
const db = require('./databaseConnectionConfig');

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true})); 
global.router = express.Router();

app.use('/', router)
routes.routers();
db();

router.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});



