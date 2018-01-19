module.exports.updateApp = function(app, user) {
  app.put('/updateUser', function(req, res) {
    var changeKey = req.body.id;
    for (var localIndex = 0; localIndex < user.length; localIndex++) {
      if (user[localIndex].id == req.body.id) {
        user[localIndex].fname = req.body.fname;
        user[localIndex].lname = req.body.lname;
        res.sendStatus(200);
      }
    }
  })
}
