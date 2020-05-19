var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const profileRYMLink = `https://fr.rateyourmusic.com/collection/${token}/recent/`

  let html = await fetch(profileRYMLink)

  html = html.text().then(text => {
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
})

module.exports = router
