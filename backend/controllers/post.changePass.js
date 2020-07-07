const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangePass (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const pass = req.body.pass
    const verifPass = req.body.verifPass
    const result = await User.changePass(pass, verifPass, req.session.userId)
    if (result != null && result.id === req.session.userId) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = postChangePass
