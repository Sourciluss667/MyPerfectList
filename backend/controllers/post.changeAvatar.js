const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangeAvatar (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const url = req.body.url
    const result = await User.changeAvatar(url, req.session.userId)
    if (result.avatar_url === url) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(403)
  }
}

module.exports = postChangeAvatar
