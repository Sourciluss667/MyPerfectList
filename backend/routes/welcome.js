var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const agent = superagent.agent()

  let html = await agent.get('https://www.goodreads.com/shelf/show/new-releases')
  html = html.text

  let indexStart = html.search('leftContainer')
  let indexEnd = html.indexOf('rightContainer', indexStart)

  const indexStartConst = indexStart
  const indexEndConst = indexEnd

  let result = html.substring(indexStart + 7, indexEnd)

  let htmlData = result
  const htmlDataConst = result

  // retrieving the book title
  let bookTitle = ''
  let htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < 100; index++) {
    indexStart = htmlData.search('<a title=')
    indexEnd = htmlData.indexOf('" class="leftAlignedImage', indexStart)
    result = htmlData.substring(indexStart + 10, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    bookTitle = bookTitle.replace(result, '')
    bookTitle = bookTitle + result + ';'
  }
  // console.log(bookTitle)
  bookTitle = bookTitle + '****XY'
  for (let index = 0; index < 100; index++) {
    bookTitle = bookTitle.replace(',">', '')
    bookTitle = bookTitle.replace('\n', '')
    bookTitle = bookTitle.replace(',,', ',')
    bookTitle = bookTitle.replace(';;', ';')
  }

  indexStart = bookTitle.search('<div class="breadcrumbs">')
  indexEnd = bookTitle.indexOf('****XY', indexStart)
  result = bookTitle.substring(indexStart, indexEnd)

  bookTitle = bookTitle.replace(result, '')
  bookTitle = bookTitle.replace('****XY', '')

  bookTitle = bookTitle.replace('tings__user-rating-review,   ,', '')
  bookTitle = bookTitle.replace(',', '')
  // retrieving the image URL
  let imageUrl = ''
  htmlData = htmlDataConst
  indexStart = indexStartConst
  indexEnd = indexEndConst
  htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < bookTitle.length; index++) {
    indexStart = htmlData.search('src="')
    indexEnd = htmlData.indexOf('" /></a>', indexStart)
    result = htmlData.substring(indexStart, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    imageUrl = imageUrl.replace(result, '')
    imageUrl = imageUrl + result + ';'
  }
  imageUrl = imageUrl + '****XY'
  for (let index = 0; index < bookTitle; index++) {
    imageUrl = imageUrl.replace(',">', '')
    imageUrl = imageUrl.replace('\n', '')
    imageUrl = imageUrl.replace(',,', ',')
    imageUrl = imageUrl.replace(';;', ';')
  }

  indexStart = imageUrl.search('src')
  indexEnd = imageUrl.indexOf('leftAlignedImage', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')
  imageUrl = imageUrl.replace('leftAlignedImage', '')

  indexStart = imageUrl.search('  " href')
  indexEnd = imageUrl.indexOf('src', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')
  for (let index = 0; index < 100; index++) {
    imageUrl = imageUrl.replace('src="', '')
  }

  indexStart = imageUrl.search('<div class="breadcrumbs">')
  indexEnd = imageUrl.indexOf('****XY', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')
  imageUrl = imageUrl.replace('****XY', '')

  const bookData = bookTitle.concat(imageUrl)
  // console.log(bookData)

  // ----------------------------------------------------film

  html = await agent.get('https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&certified&sortBy=popularity&type=in-theaters&page=1')
  const html2 = await agent.get('https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&certified&sortBy=popularity&type=in-theaters&page=2')
  html = html.text + html2.text

  indexStart = html.search('title":')
  indexEnd = html.indexOf('elasticbeanstalk', indexStart)

  const indexStartFilmConst = indexStart
  const indexEndFilmConst = indexEnd

  result = html.substring(indexStart + 7, indexEnd)

  htmlData = result
  const htmlDataFilmConst = result

  // retrieving the book title
  bookTitle = ''
  htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < 100; index++) {
    indexStart = htmlData.search('"title":"')
    indexEnd = htmlData.indexOf('","url', indexStart)
    result = htmlData.substring(indexStart + 9, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    bookTitle = bookTitle.replace(result, '')
    bookTitle = bookTitle + result + ';'
  }
  bookTitle = bookTitle + '****XY'
  for (let index = 0; index < 100; index++) {
    bookTitle = bookTitle.replace(',">', '')
    bookTitle = bookTitle.replace('\n', '')
    bookTitle = bookTitle.replace(',,', ',')
    bookTitle = bookTitle.replace(';;', ';')
  }

  indexStart = bookTitle.search('","url":')
  indexEnd = bookTitle.indexOf('****XY', indexStart)
  result = bookTitle.substring(indexStart, indexEnd)

  bookTitle = bookTitle.replace(result, '')
  bookTitle = bookTitle.replace('****XY', '')

  bookTitle = bookTitle.replace('tings__user-rating-review,   ,', '')
  bookTitle = bookTitle.replace(',', '')
  // retrieving the image URL
  imageUrl = ''
  htmlData = htmlDataFilmConst
  indexStart = indexStartFilmConst
  indexEnd = indexEndFilmConst
  htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < bookTitle.length; index++) {
    indexStart = htmlData.search('"primary":"')
    indexEnd = htmlData.indexOf('"},"actors"', indexStart)
    result = htmlData.substring(indexStart + 11, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    imageUrl = imageUrl.replace(result, '')
    imageUrl = imageUrl + result + ';'
  }
  imageUrl = imageUrl + '****XY'
  for (let index = 0; index < bookTitle; index++) {
    imageUrl = imageUrl.replace(',">', '')
    imageUrl = imageUrl.replace('\n', '')
    imageUrl = imageUrl.replace(',,', ',')
    imageUrl = imageUrl.replace(';;', ';')
  }

  indexStart = imageUrl.search('the Beach')
  indexEnd = imageUrl.indexOf('",', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')

  indexStart = imageUrl.search('","')
  indexEnd = imageUrl.indexOf('"},', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')

  imageUrl = imageUrl.replace('"},', '')
  imageUrl = imageUrl.replace('"actors;', '')
  imageUrl = imageUrl.replace('****XY', '')

  const filmData = bookTitle.concat(imageUrl)

  // ------------------------------------------anime

  html = await agent.get('https://myanimelist.net/anime/season')
  html = html.text

  indexStart = html.search('TV (New)')
  indexEnd = html.indexOf('anime-header">ONA', indexStart)

  const indexStartAnimeConst = indexStart
  const indexEndAnimeConst = indexEnd

  result = html.substring(indexStart + 7, indexEnd)

  htmlData = result
  const htmlDataAnimeConst = result

  // retrieving the book title
  bookTitle = ''
  htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < 100; index++) {
    indexStart = htmlData.search('link-title">')
    indexEnd = htmlData.indexOf('</a>', indexStart)
    result = htmlData.substring(indexStart + 12, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    bookTitle = bookTitle.replace(result, '')
    bookTitle = bookTitle + result + ';'
  }

  bookTitle = bookTitle + '****XY'
  for (let index = 0; index < 100; index++) {
    bookTitle = bookTitle.replace(',">', '')
    bookTitle = bookTitle.replace('\n', '')
    bookTitle = bookTitle.replace(',,', ',')
    bookTitle = bookTitle.replace(';;', ';')
  }

  indexStart = bookTitle.search('BLIC')
  indexEnd = bookTitle.indexOf('****XY', indexStart)
  result = bookTitle.substring(indexStart, indexEnd)

  bookTitle = bookTitle.replace(result, '')
  bookTitle = bookTitle.replace('****XY', '')

  bookTitle = bookTitle.replace('tings__user-rating-review,   ,', '')
  bookTitle = bookTitle.replace(',', '')

  // retrieving the image URL
  imageUrl = ''
  htmlData = htmlDataAnimeConst
  indexStart = indexStartAnimeConst
  indexEnd = indexEndAnimeConst
  htmlDatasub = htmlData.substring(indexStart, indexEnd)

  for (let index = 0; index < bookTitle.length; index++) {
    indexStart = htmlData.search('<img src="')
    indexEnd = htmlData.indexOf('" width="167"', indexStart)
    result = htmlData.substring(indexStart + 10, indexEnd)
    htmlDatasub = htmlData.substring(indexStart, indexEnd)
    htmlData = htmlData.replace(htmlDatasub, '')
    imageUrl = imageUrl.replace(result, '')
    imageUrl = imageUrl + result + ';'
  }

  imageUrl = imageUrl + '****XY'
  for (let index = 0; index < bookTitle; index++) {
    imageUrl = imageUrl.replace(',">', '')
    imageUrl = imageUrl.replace('\n', '')
    imageUrl = imageUrl.replace(',,', ',')
    imageUrl = imageUrl.replace(';;', ';')
  }

  indexStart = imageUrl.search('PUBLIC')
  indexEnd = imageUrl.indexOf('width=";', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')

  indexStart = imageUrl.search('src">')
  indexEnd = imageUrl.indexOf('<img ', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')

  indexStart = imageUrl.search('  " href')
  indexEnd = imageUrl.indexOf('src', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')
  for (let index = 0; index < 100; index++) {
    imageUrl = imageUrl.replace('src="', '')
    imageUrl = imageUrl.replace('" width=', '')
  }
  imageUrl = imageUrl.replace('width=";', '')
  imageUrl = imageUrl.replace(result, '')
  imageUrl = imageUrl.replace('****XY', '')

  const animeData = bookTitle.concat(imageUrl)
  // console.log(animeData)
  // ----------------------------------------------sending data

  let allData = bookData.concat(filmData)
  allData = allData.concat(animeData)

  console.log(allData)
  res.send(allData)
})

module.exports = router
