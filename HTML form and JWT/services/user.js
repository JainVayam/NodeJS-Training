const User = require(".././model/user.js")
const cfg = require(".././config.js")
const jwt = require('jsonwebtoken')
const Blog = require(".././model/blog.js")

 __dirname ='/home/rails/Training/NodeJS-Training/HTML form and JWT/'

const startPage = (req, res) => {
  res.sendFile(__dirname +'frontendHTML/startPage.html');
}

const userLogin = (req, res) => {
  if(req.body.username && req.body.password) {
    const pass = req.body.password
    const user = req.body.username
    User.findOne({username : user}, function(err, userData) {
      if(err) {
        res.sendStatus(401);
      } else if (userData) {   
        userData.comparePassword(req.body.password, function(err, isMatch) {
          if (err) res.sendStatus(401)
          else {
            if(isMatch) {
              const payload = {
                id : userData._id
              }      
              const token = jwt.sign(payload, cfg.jwtSecret);              
              res.sendFile(__dirname +'/frontendHTML/userOptions.html');          
            } else {          
              res.sendStatus(401);
            }
          }
        })
      } else res.sendStatus(401)
    })
  } else {
    res.sendStatus(401);
  }
}

const signUPPage = (req, res) => {
  res.sendFile(__dirname + '/frontendHTML/signUPPage.html')
}

const registrationConfirm = (req, res) => {
  const userData = req.body;
  if(userData) {
    const newUser = new User(userData);
    newUser.save((err) => {
      if (err) {     
        res.sendStatus(401) 
      } else {
        res.sendFile(__dirname + 'frontendHTML/registrationConfirm.html')
      }   
    })
  } else {
    res.send("Enter all the details")
  }
}

module.exports = {
  startPage,
  userLogin,
  signUPPage,
  registrationConfirm
}
