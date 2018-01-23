module.exports.findingID = function (user, receivedID) {
  return user.findIndex((user, index) => { 
    return user.id == receivedID;
  });
}
