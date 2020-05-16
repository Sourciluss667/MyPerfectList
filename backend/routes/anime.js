var express = require('express')
var router = express.Router()
const searchAnime = require('../controllers/get.anime')

async function isAuthenticated (req, res, next) {
  if (req.session.userId) {
    next() // appeler next() appelle la prochaine fonction dans la liste des middlewares
    return
  }
  res.status(401).send('unauthorized(1)')
}

/* get anime search */
router.get('/', isAuthenticated, searchAnime)

module.exports = router
