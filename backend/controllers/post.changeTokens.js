const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postChangeTokens (req, res) {
  // SI CONNECTER !!!
  if (req.session.userId) {
    const imdb = req.body.imdb
    const mal = req.body.mal
    const rym = req.body.rym
    const gd = req.body.gd
    const rt = req.body.rt
    const result = await User.changeTokens({imdb, mal, rym, rt, gd }, req.session.userId)
    if (result.imdb === imdb) {
      res.sendStatus(200)
    }
    else {
      res.sendStatus(500)
    }
  }
  else {
    res.sendStatus(403)
  }
  
}

module.exports = postChangeTokens
