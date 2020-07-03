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

  let countMovies = 0

  html = await agent.get('https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&certified&sortBy=popularity&type=in-theaters&page=1')
  movies = JSON.parse(html.text)
  for (let i = 0; i < movies.results.length; i++) {
    allData.movies.push({title: movies.results[i].title, synopsis: movies.results[i].synopsis, releaseDate: movies.results[i].theaterReleaseDate, runtime: movies.results[i].runtime, img: movies.results[i].posters.primary})
  }

  countMovies = movies.results.length

  html = await agent.get('https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&certified&sortBy=popularity&type=in-theaters&page=2')
  movies = JSON.parse(html.text)
  for (let i = 0; i < movies.results.length - (countMovies + movies.results.length - 50); i++) {
    allData.movies.push({title: movies.results[i].title, synopsis: movies.results[i].synopsis, releaseDate: movies.results[i].theaterReleaseDate, runtime: movies.results[i].runtime, img: movies.results[i].posters.primary})
  }

  // ANIMES

  html = await agent.get('https://myanimelist.net/anime/season')
  html = html.text

  indexStart = html.indexOf('<div class="js-categories-seasonal"><div class="seasonal-anime-list js-seasonal-anime-list js-seasonal-anime-list-key-1 clearfix">')
  indexEnd = html.indexOf('<div class="btn-top js-btn-top"></div>', indexStart)

  if (indexStart != -1 && indexEnd != -1) {
    htmlData = html.substring(indexStart, indexEnd)
    indexStart = 0
    for (let i = 0; i < 50; i++) {
      indexStart = htmlData.indexOf('<div class="seasonal-anime js-seasonal-anime"', indexStart + 10)
      indexEnd = htmlData.indexOf('<span class="score score-label score-na" title="Score">', indexStart)

      if (indexStart != -1 && indexEnd != -1) {
        one = htmlData.substring(indexStart + 10, indexEnd)
        // console.log('\n-----------------------------------------------\n\n' + one + '\n\n---------------------------------------------\n\n')

        // TITLE
        let tIndexStart = one.search(/<a href="https:\/\/myanimelist.net\/anime\/.+\/.+" class="link-title">/g)
        let tIndexEnd = one.indexOf('</a>', tIndexStart)
        let title = one.substring(tIndexStart, tIndexEnd)
        title = title.substring(title.indexOf('class="link-title">') + 19)

        // Episodes count
        tIndexStart = one.search(/<a href="https:\/\/myanimelist.net\/anime\/.+\/.+\/episode"><span>/g)
        tIndexEnd = one.indexOf('</span>', tIndexStart)
        let eps = one.substring(tIndexStart, tIndexEnd)
        eps = eps.substring(eps.indexOf('<span>') + 6, eps.indexOf(' ep'))

        // IMAGES
        tIndexStart = one.search(/https:\/\/cdn.myanimelist.net\/images\/anime\/.+\/.+webp"/g)

        if (tIndexStart != -1) {
          tIndexEnd = one.indexOf('.webp"', tIndexStart) + 5
        } else {
          tIndexStart = one.search(/https:\/\/cdn.myanimelist.net\/images\/anime\/.+\/.+jpg"/g)
          tIndexEnd = one.indexOf('.jpg"', tIndexStart) + 4
        }

        let img = one.substring(tIndexStart, tIndexEnd)
        //console.log('\n' + img)

        // SYNOPSIS
        let synopsis = ''
        
        tIndexStart = one.search(/<div class="synopsis js-synopsis">/g) + 61
        
        if (tIndexStart != 1) {
          tIndexEnd = one.indexOf('</span>', tIndexStart)
          synopsis = one.substring(tIndexStart, tIndexEnd)
        }

        allData.animes.push({title: title, count: eps, img: img, synopsis: synopsis})
      }
    }

  }

  //console.log(allData)
  res.json(allData)
})

module.exports = router
