var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  const result = await agent.get(`https://www.imdb.com/user/${token}/watchlist`)

  res.send(result.text)
})

module.exports = router
