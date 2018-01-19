module.exports.deleteApp = function (app, user) {
  app.delete('/deleteUser/:id', function(req, res) {
    for (var localIndex = 0; localIndex < user.length; localIndex++) {
      if (Number(req.params['id']) == user[localIndex].id) {
        if (localIndex == user.length - 1){
          user.splice(user[localIndex].id, user[localIndex].id);
          res.sendStatus(200);
          break;
        } 
        user.splice(user[localIndex].id, user[localIndex].id + 1 )
        res.sendStatus(200); 
      }
    }
  })
}
