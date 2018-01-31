const userService = require('../services/user.js')

const postsByUserID = (req, res) => {
  userService.postsByUserID(req, res);
}

const addUser = (req, res) => {
  userService.addUser(req, res);
}

const removeUser = (req, res) => {
  userService.deleteUser(req, res);
}

const changeUser = (req, res) => {
  userService.updateUser(req, res); 
}

module.exports = {
  postsByUserID,
  addUser,
  removeUser,
  changeUser
}
