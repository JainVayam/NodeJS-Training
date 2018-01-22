module.exports.deleteUser = (app, user) => {
  app.delete('/deleteUser/:id', (req, res) => {
    var receivedID = req.params['id'];
    var isUserAlreadyPresent = user.findIndex((user,index)=> { 
      return user.id == receivedID
    });
    if (isUserAlreadyPresent != -1) {
      user.splice(isUserAlreadyPresent, isUserAlreadyPresent + 1);
      var statusCode = 200;
      var message = "Succesfully Deleted"
    } else {  
      var statusCode = 400;
      var message = "Deletion failed, no Id match found.";
      }
    res.status(statusCode).send(message);
  })
}
