module.exports.getApp = function(app, user ) {
  app.get('/getUser', function (req, res) { 
    res.send(user); 
  }) 
}
