var express = require('express')
var router = express.Router()
const postLogin = require('../controllers/post.login')
const postSigin = require('../controllers/post.sigin')
const getCurrentUser = require('../controllers/get.currentUser')
const getUserByUsername = require('../controllers/get.userByUsername')
const passwordLost = require('../controllers/passwordLost')
const changeTokens = require('../controllers/post.changeTokens')
const changeAvatar = require('../controllers/post.changeAvatar')
const changeName = require('../controllers/post.changeName')
const changeUsername = require('../controllers/post.changeUsername')
const changeEmail = require('../controllers/post.changeEmail')
const changeGender = require('../controllers/post.changeGender')
const { check } = require('express-validator')

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
router.post('/sigin', [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
], postSigin)
router.post('/changeTokens', changeTokens)
router.post('/changeAvatar', changeAvatar)
router.post('/changeUsername', changeUsername)
router.post('/changeEmail', changeEmail)
router.post('/changeGender', changeGender)
router.post('/changeName', changeName)
router.get('/logout', logOut)
router.get('/current_user', getCurrentUser)
router.get('/userbyusername/:username', getUserByUsername)
router.get('/passwordlost/:email', [
  check('email').isEmail()
], passwordLost)

module.exports = router
