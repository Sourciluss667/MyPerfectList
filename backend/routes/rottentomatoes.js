var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  let html = await agent.get(`https://www.rottentomatoes.com/user/id/${token}/ratings`)
  html = html.text

  let indexStart = html.search('<li class="ratings__user-rating-review">')
  let indexEnd = html.indexOf('<footer', indexStart)

  const indexStartConst = indexStart
  const indexEndConst = indexEnd

  let result = html.substring(indexStart + 7, indexEnd)

  let htmlData = result
  const htmlDataConst = result

  // retrieving the movie title
  let movieTitle = ''
  let htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < 100; index++) {
    indexStart = htmlData.search('title="')
    indexEnd = htmlData.indexOf('">', indexStart)
    result = htmlData.substring(indexStart + 7, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    movieTitle = movieTitle.replace(result, '')
    movieTitle = movieTitle + result + ','
  }
  for (let index = 0; index < 100; index++) {
    movieTitle = movieTitle.replace(',">', '')
    movieTitle = movieTitle.replace('\n', '')
    movieTitle = movieTitle.replace(',,', ',')
  }

  movieTitle = movieTitle.replace('tings__user-rating-review,   ,', '')
  movieTitle = movieTitle.replace(',', '')

  // retrieving the image URL
  let imageUrl = ''
  htmlData = htmlDataConst
  indexStart = indexStartConst
  indexEnd = indexEndConst
  htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < movieTitle.length; index++) {
    indexStart = htmlData.search('src="')
    indexEnd = htmlData.indexOf('" alt="', indexStart + 5)
    result = htmlData.substring(indexStart + 5, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    imageUrl = imageUrl.replace(result, '')
    imageUrl = imageUrl + result + ','
  }
  imageUrl = imageUrl + '****XY'
  for (let index = 0; index < movieTitle; index++) {
    imageUrl = imageUrl.replace(',">', '')
    imageUrl = imageUrl.replace('\n', '')
    imageUrl = imageUrl.replace(',,', ',')
  }

  indexStart = imageUrl.search('ratings__user-rating-review">')
  indexEnd = imageUrl.indexOf('****XY', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')
  imageUrl = imageUrl.replace('****XY', '')

  const movieData = movieTitle.concat(imageUrl)
  console.log(movieData)

  res.send(movieData)
})

module.exports = router
