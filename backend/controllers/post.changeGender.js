const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangeGender (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const gender = req.body.gender
    const result = await User.changeGender(gender, req.session.userId)
    if (result.gender === gender) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = postChangeGender
