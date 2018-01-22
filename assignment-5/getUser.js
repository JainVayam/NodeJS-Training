module.exports.getUser = (app, user) => {
  app.get('/getUser', (req, res) => { 
    res.send(user); 
  }) 
}
