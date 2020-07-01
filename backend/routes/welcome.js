var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const agent = superagent.agent()
  let allData = { books: [], movies: [], animes: [] }

  // BOOKS

  let html = await agent.get('https://www.goodreads.com/shelf/show/new-releases')
  html = html.text

  let indexStart = html.search('leftContainer')
  let indexEnd = html.indexOf('rightContainer', indexStart)

  let htmlData = html.substring(indexStart + 7, indexEnd)

  // BOOKS TITLES
  indexStart = 0
  let result = ''

  for (let i = 0; i < 50; i++) {
    indexStart = htmlData.indexOf('<a title=', indexStart + 10)
    indexEnd = htmlData.indexOf('" class="leftAlignedImage', indexStart)
    if (indexStart != -1 && indexEnd != -1) {
      result = htmlData.substring(indexStart + 10, indexEnd)
      allData.books.push({title: result})
    }
  }

  // BOOKS IMAGES
  indexStart = 0

  for (let i = 0; i < allData.books.length; i++) {
    indexStart = htmlData.indexOf('src="https://i.gr-assets.com/', indexStart + 10)
    indexEnd = htmlData.indexOf('" /></a>', indexStart)
    if (indexStart != -1 && indexEnd != -1) {
      result = htmlData.substring(indexStart + 5, indexEnd)
      allData.books[i].img = result
    }
  }

  // MOVIES

  html = await agent.get('https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&certified&sortBy=popularity&type=in-theaters&page=1')
  movies = JSON.parse(html.text)
  console.log(movies.results[0])
  for (let i = 0; i < movies.results.length; i++) {
    allData.movies.push({title: movies.results[i].title, synopsis: movies.results[i].synopsis, releaseDate: movies.results[i].theaterReleaseDate, runtime: movies.results[i].runtime, img: movies.results[i].posters.primary})
  }

  html = await agent.get('https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&certified&sortBy=popularity&type=in-theaters&page=2')
  movies = JSON.parse(html.text)
  for (let i = 0; i < movies.results.length; i++) {
    allData.movies.push({title: movies.results[i].title, synopsis: movies.results[i].synopsis, releaseDate: movies.results[i].theaterReleaseDate, runtime: movies.results[i].runtime, img: movies.results[i].posters.primary})
  }

  /*
  
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

  // let allData = bookData.concat(filmData)
  // allData = allData.concat(animeData)
*/

  console.log(allData)
  res.json(allData)
})

module.exports = router
