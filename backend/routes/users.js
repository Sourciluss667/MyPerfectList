var express = require('express')
var router = express.Router()
const postLogin = require('../controllers/post.login')
const postSigin = require('../controllers/post.sigin')
const getCurrentUser = require('../controllers/get.currentUser')
const getUserByUsername = require('../controllers/get.userByUsername')

function logOut (req, res) {
  console.log(req.session)
  if (req.session.userId) {
    delete req.session.userId
    req.session.destroy()
  }
  console.log(req.session)
  res.status(200).send('deconnected')
}

router.post('/login', postLogin)
router.post('/sigin', postSigin)
router.get('/logout', logOut)
router.get('/current_user', getCurrentUser)
router.get('/userbyusername/:username', getUserByUsername)

module.exports = router
