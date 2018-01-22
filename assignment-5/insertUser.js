module.exports.insertUser = function(app, user) {
  app.post('/insertUser', function(req, res) {
    var isUserAlreadyPresent;
    var receivedID = req.body.id
    var isUserAlreadyPresent = user.findIndex((user,index)=> { 
      return user.id == receivedID
    });
    if (isUserAlreadyPresent == -1) {
      newUser = req.body;
      user.push(req.body);
      var statusCode = 200;
      var message = "Succesfully Added";
    } else {
      var statusCode = 400;
      var message = "Failed : ID already present";
    } 
    res.status(statusCode).send(message);
  })
}

