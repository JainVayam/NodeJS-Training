module.exports.updateUser = (app, user) => {
  app.put('/updateUser', (req, res) => {
    var isUserAlreadyPresent;
    var receivedID = req.body.id
    var isUserAlreadyPresent = user.findIndex((user)=> { 
      return user.id == receivedID
    });
    if (isUserAlreadyPresent != -1) {
      user[isUserAlreadyPresent] = req.body;
      var statusCode = 200
      var message = "Succesfully Updated";
      console.log(user);
    } else {
      var statusCode = 400;
      var message = "Failed : ID not found"
    }
    res.status(statusCode).send(message); 
  })
}
