var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  let html = await agent.get(`https://www.goodreads.com/review/list/${token}`)
  html = html.text

  const indexStart = html.search('<tbody id="booksBody">')
  const indexEnd = html.indexOf('</tbody>', indexStart)

  const result = html.substring(indexStart + 7, indexEnd)
  console.log(result)
  res.send(result)
})

module.exports = router
