const user = require('.././services/user')

const startPage = (req, res) => {
  user.startPage(req, res)
}

const signUPPage = (req, res) => {
  user.signUPPage(req, res)
}

const userLogin = (req, res) => {
  user.userLogin(req, res)
}

const registrationConfirm = (req, res) => {
  user.registrationConfirm(req, res)
}

module.exports = {
  startPage,
  signUPPage,
  userLogin,
  registrationConfirm
}
