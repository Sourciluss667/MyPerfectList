const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangeUsername (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const username = req.body.username
    const result = await User.changeUsername(username, req.session.userId)
    if (result.username === username) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = postChangeUsername
