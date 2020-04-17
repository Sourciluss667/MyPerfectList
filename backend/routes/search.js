var express = require('express')
var router = express.Router()
const getAllUsername = require('../controllers/get.allUsername')

/* GET home page. */
router.get('/users/:val', async (req, res) => {
  const searchStr = req.params.val.toLowerCase()
  console.log('Search: ' + searchStr)

  const result = []

  const allUsername = await getAllUsername()

  allUsername.forEach(element => {
    const u = element.username.toLowerCase()
    if (u.includes(searchStr)) {
      result.push(element)
    }
  });

  console.log('Result: ' + result)

  res.send(result)
})

module.exports = router
