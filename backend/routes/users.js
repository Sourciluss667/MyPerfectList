var express = require('express')
var router = express.Router()
const postLogin = require('../controllers/post.login')
const postSigin = require('../controllers/post.sigin')
const getCurrentUser = require('../controllers/get.currentUser')

router.post('/login', postLogin)
router.post('/sigin', postSigin)
router.get('/', getCurrentUser)

module.exports = router
