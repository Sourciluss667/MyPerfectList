var express = require('express')
var router = express.Router()
const { searchAnime, searchAnimeUsingToken, authToMAL } = require('../controllers/get.anime')

async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next() // appeler next() appelle la prochaine fonction dans la liste des middlewares
    return
  }
  res.status(401).send('unauthorized(1)')
}

/* get anime search */
router.get('/:maluser/:bdOption', isAuthenticated, searchAnime)
router.get('/tokenusing/:token/:bdOption', isAuthenticated, searchAnimeUsingToken)
router.get('/authToMALJWT/:username/:password', isAuthenticated, authToMAL)

module.exports = router
