var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  let html = await agent.get(`https://www.imdb.com/user/${token}/watchlist`)
  html = html.text

  const indexStart = html.search(/IMDbReactInitialState.push/) // + IMDbReactInitialState.push( length
  const indexEnd = html.indexOf(');', indexStart)

  let result = html.substring(indexStart + 27, indexEnd)

  try {
    result = JSON.parse(result)
  } catch (err) {
    console.log(result)
    console.error(err)
  }

  res.send(result.titles)
})

module.exports = router
