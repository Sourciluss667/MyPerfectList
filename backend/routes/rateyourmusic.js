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
      let indexStart = text.search('<link rel="canonical" href="https://')
      let indexEnd = text.indexOf('<!-- ~~~~~~~~ end content ~~~~~~~~~~~~~~~ -->', indexStart)

      let result = text.substring(indexStart + 7, indexEnd)

      let htmlData = result
      const htmlDataConst = result

      const indexStartConst = indexStart
      const indexEndConst = indexEnd

      // retrieving the album title
      let albumTitle = ''
      let htmlDatasub = htmlData.substring(indexStart, indexEnd)

      for (let index = 0; index < 100; index++) {
        indexStart = htmlData.search('"   alt="')
        indexEnd = htmlData.indexOf('" title', indexStart)
        result = htmlData.substring(indexStart + 9, indexEnd)
        htmlDatasub = htmlData.substring(indexStart, indexEnd)
        htmlData = htmlData.replace(htmlDatasub, '')
        albumTitle = albumTitle.replace(result, '')
        albumTitle = albumTitle + result + ','
      }
      for (let index = 0; index < 100; index++) {
        albumTitle = albumTitle.replace('\n', '')
        albumTitle = albumTitle.replace(',,', ',')
        indexStart = albumTitle.search('nical')
        indexEnd = albumTitle.indexOf('" title=', indexStart)
        result = albumTitle.substring(indexStart, indexEnd)

        albumTitle = albumTitle.replace(result, '')
        albumTitle = albumTitle.replace('" title=', '')
      }

      albumTitle = albumTitle.replace('tings__user-rating-review,   ,', '')

      // retrieving the image URL
      let imageUrl = ''
      htmlData = htmlDataConst
      indexStart = indexStartConst
      indexEnd = indexEndConst
      htmlDatasub = htmlData.substring(indexStart, indexEnd)

      for (let index = 0; index < albumTitle.length; index++) {
        indexStart = htmlData.search('src="')
        indexEnd = htmlData.indexOf('" /></a>', indexStart + 5)
        result = htmlData.substring(indexStart + 5, indexEnd)
        htmlDatasub = htmlData.substring(indexStart, indexEnd)
        htmlData = htmlData.replace(htmlDatasub, '')
        imageUrl = imageUrl.replace(result, '')
        imageUrl = imageUrl + result + ','
      }
      imageUrl = imageUrl + '****XY'
      for (let index = 0; index < albumTitle; index++) {
        imageUrl = imageUrl.replace(',">', '')
        imageUrl = imageUrl.replace('\n', '')
        imageUrl = imageUrl.replace(',,', ',')
      }

      indexStart = imageUrl.search('canonical"')
      indexEnd = imageUrl.indexOf('****XY', indexStart)
      result = imageUrl.substring(indexStart, indexEnd)

      imageUrl = imageUrl.replace(result, '')
      imageUrl = imageUrl.replace('****XY', '')

      const albumData = albumTitle.concat(imageUrl)
      console.log(albumData)

      res.send(albumData)
    })
})

module.exports = router
