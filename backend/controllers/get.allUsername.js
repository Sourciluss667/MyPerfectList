const User = require('../models/user_model')

function getAllUsername () {
  return User.getAllUsername()
}

module.exports = getAllUsername
