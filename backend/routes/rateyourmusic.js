var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  // const token = req.params.token
  const agent = superagent.agent()

  // let html = await agent.get(`https://fr.rateyourmusic.com/collection/${token}/recent/`)
  let html = await agent.get('https://fr.rateyourmusic.com/collection/zackdrake/recent/')
  html = html.text

  const indexStart = html.search('<tbody>')
  const indexEnd = html.indexOf('</tbody>', indexStart)

  let result = html.substring(indexStart + 7, indexEnd)

  try {
    result = JSON.parse(result)
  } catch (err) {
    console.log(result)
    console.error(err)
  }

  res.send(result)
})

module.exports = router
