module.exports.updateUser = (app, user) => {
  app.put('/updateUser', (req, res) => {
    var searchID = require('./findingID');
    var receivedID = req.body.id;
    var userID = searchID.findingID(user, receivedID);
    if (userID != -1) {
      user[userID] = req.body;
    }
    var statusCode = userID != -1 ? 200 :400;
    var message = userID != -1 ? "Updation done" :"Failed: ID Absent";
    res.status(statusCode).send(message); 
  })
}

