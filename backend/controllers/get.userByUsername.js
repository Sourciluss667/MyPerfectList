const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getUserByUsername (req, res) {
  const username = req.params.username
  const user = await User.getByUsername(username)

  if (user) {
    delete user.password
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}

module.exports = getUserByUsername
