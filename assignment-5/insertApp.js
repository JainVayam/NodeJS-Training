module.exports.insertApp = function(app, user) {
  app.post('/insertUser', function(req, res) {
    var newUser = {};
    var duplicateFlag = 0;
    for (var localIndex = 0; localIndex < user.length; localIndex++) {
      if (user[localIndex].id == req.body.id) { 
        duplicateFlag = 1;
      }
    }    
    if (duplicateFlag == 1) {
      res.send("Failed");
    } else {
      newUser.fname = req.body.fname;
      newUser.lname = req.body.lname;
      newUser.id = req.body.id;
      user.push(newUser);
      res.sendStatus(200);
    } 
  })
}
