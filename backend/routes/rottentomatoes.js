var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  let html = await agent.get(`https://www.rottentomatoes.com/user/id/${token}`)
  html = html.text

  const indexStart = html.search('<li class="ratings__user-rating-review">')
  const indexEnd = html.indexOf('<span class="js-rating-display-name hide">', indexStart)

  const result = html.substring(indexStart + 7, indexEnd)
  console.log(result)
  res.send(result)
})

module.exports = router
