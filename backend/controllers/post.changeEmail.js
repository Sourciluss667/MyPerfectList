const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangeEmail (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const email = req.body.email
    const result = await User.changeEmail(email, req.session.userId)
    if (result.email === email) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = postChangeEmail
