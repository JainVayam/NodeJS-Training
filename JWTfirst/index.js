const express = require("express");  
const bodyParser = require("body-parser");  
const jwt = require("jwt-simple");  
const auth = require("./auth.js")();  
const users = require("./usersList.js");  
const cfg = require("./config.js");  
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true})); 
app.use(auth.initialize());

app.get("/", function(req, res) {  
  res.json({
    status: "My API is alive!"
  });
});

app.get("/user", auth.authenticate('jwt', { session: false }), ((req, res) => {  
  res.json(users[req.user.id]);
}));

app.post("/token", function(req, res) {  
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    const password = req.body.password;
    const user = users.find(function(u) {
      return u.email === email && u.password === password;
    });
    if (user) {
      const payload = {
        id: user.id
      }; 
      const token = jwt.encode(payload, cfg.jwtSecret);
      res.json({
        token: 'JWT ' + token
      });  
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.listen(3000, function() {  
    console.log("My API is running...");
});


