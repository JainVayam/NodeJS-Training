module.exports.insertUser = (app, user) => {
  app.post('/insertUser', (req, res) => {
    var searchID = require('./findingID');
    var receivedID = req.body.id;
    var userID = searchID.findingID(user, receivedID);
    if (userID == -1) {
      newUser = req.body;
      user.push(req.body);
    }
    var statusCode = userID == -1 ? 200 : 400;
    var message = userID == -1 ? "Insertion done" : "Failed: ID Present";  
    res.status(statusCode).send(message);
  })
}

