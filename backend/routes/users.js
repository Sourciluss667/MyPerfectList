var express = require('express')
var router = express.Router()
const postLogin = require('../controllers/post.login');
const postSigin = require('../controllers/post.sigin');



router.post('/login', postLogin);
router.post('/sigin', postSigin);

module.exports = router
