module.exports.deleteUser = (app, user) => {
  app.delete('/deleteUser/:id', (req, res) => {
    var searchID = require('./findingID');
    var receivedID = req.params['id'];
    var userID = searchID.findingID(user, receivedID);
    if (userID != -1) {
      user.splice(userID, userID + 1);
    }
    var statusCode = userID != -1 ? 200 :400;
    var message = userID != -1 ? "Deletion Done" :"Failed: ID Absent";
    res.status(statusCode).send(message);
  })
}
