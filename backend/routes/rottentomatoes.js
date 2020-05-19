var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  let html = await agent.get(`https://www.rottentomatoes.com/user/id/${token}`)
  html = html.text

  const indexStart = html.search('<ul>')
  const indexEnd = html.indexOf('</ul>', indexStart)

  let result = html.substring(indexStart + 7, indexEnd)

  try {
    result = JSON.parse(result)
  } catch (err) {
    console.log(result)
    console.error(err)
  }

  res.send(result.a.albums)
})

module.exports = router
