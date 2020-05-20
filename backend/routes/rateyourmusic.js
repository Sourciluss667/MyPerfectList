var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const profileRYMLink = `https://fr.rateyourmusic.com/collection/${token}/recent/`

  await fetch(profileRYMLink).then(function (response) {
    return response.text()
  })
    .then(function (text) {
      const indexStart = text.search('<td class="or_q_small_album">')
      const indexEnd = text.indexOf('</tbody>', indexStart)

      const result = text.substring(indexStart + 7, indexEnd)
      console.log(result)
      res.send(result)
    })
})

module.exports = router
