var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const token = req.params.token
  const agent = superagent.agent()

  let html = await agent.get(`https://www.goodreads.com/review/list/${token}`)
  html = html.text

  let indexStart = html.search('<tbody id="booksBody">')
  let indexEnd = html.indexOf('</tbody>', indexStart)

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
    indexEnd = htmlData.indexOf('" href="/book/', indexStart)
    result = htmlData.substring(indexStart + 10, indexEnd)
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

  indexStart = bookTitle.search('Body">              ')
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
    indexEnd = htmlData.indexOf('" /></a>', indexStart + 5)
    result = htmlData.substring(indexStart + 5, indexEnd)
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

  indexStart = imageUrl.search('booksBody">')
  indexEnd = imageUrl.indexOf('****XY', indexStart)
  result = imageUrl.substring(indexStart, indexEnd)

  imageUrl = imageUrl.replace(result, '')
  imageUrl = imageUrl.replace('****XY', '')

  const bookData = bookTitle.concat(imageUrl)
  console.log(bookData)

  res.send(bookData)
})

module.exports = router
