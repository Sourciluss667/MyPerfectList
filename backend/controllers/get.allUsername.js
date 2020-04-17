const User = require('../models/user_model')

async function getAllUsername () {
  return await User.getAllUsername()
}

module.exports = getAllUsername
