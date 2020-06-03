const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangeName (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const name = req.body.name
    const result = await User.changeName(name, req.session.userId)
    if (result.name === name) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = postChangeName
