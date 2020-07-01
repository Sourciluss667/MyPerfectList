var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET home page. */
router.get('/:token', async (req, res) => {
  const agent = superagent.agent()

  let htmlbooks = await agent.get(`https://www.goodreads.com/shelf/show/new-releases`)
  htmlbooks = htmlbooks.text

  let indexStartBooks = htmlbooks.search('<div class="left" style="width: 75%;">')
  let indexEndBooks = htmlbooks.indexOf('<div class="clear"></div>', indexStartBooks)

  const indexStartConstBooks = indexStartBooks
  const indexEndConstBooks = indexEndBooks

  let resultBooks = htmlbooks.substring(indexStartBooks + 7, indexEndBooks)

  let htmlDataBooks = resultBooks
  const htmlDataConstBooks = resultBooks

  // retrieving the book title
  let bookTitle = ''
  let htmlDataSubBooks = htmlDataBooks.substring(indexStartBooks, indexEndBooks)

  for (let index = 0; index < 100; index++) {
    indexStartBooks = htmlDataBooks.search('<a title=')
    indexEndBooks = htmlDataBooks.indexOf('" href="/book/', indexStartBooks)
    resultBooks = htmlDataBooks.substring(indexStartBooks + 10, indexEndBooks)
    htmlDataSubBooks = htmlDataBooks.substring(indexStartBooks, indexEndBooks)
    htmlDataBooks = htmlDataBooks.replace(htmlDataSubBooks, '')
    bookTitle = bookTitle.replace(resultBooks, '')
    bookTitle = bookTitle + resultBooks + ';'
  }
  bookTitle = bookTitle + '****XY'
  for (let index = 0; index < 100; index++) {
    bookTitle = bookTitle.replace(',">', '')
    bookTitle = bookTitle.replace('\n', '')
    bookTitle = bookTitle.replace(',,', ',')
    bookTitle = bookTitle.replace(';;', ';')
  }

  indexStartBooks = bookTitle.search('Body">              ')
  indexEndBooks = bookTitle.indexOf('****XY', indexStartBooks)
  resultBooks = bookTitle.substring(indexStartBooks, indexEndBooks)

  bookTitle = bookTitle.replace(resultBooks, '')
  bookTitle = bookTitle.replace('****XY', '')

  bookTitle = bookTitle.replace('tings__user-rating-review,   ,', '')
  bookTitle = bookTitle.replace(',', '')

  // retrieving the image URL
  let imageURLBooks = ''
  htmlDataBooks = htmlDataConstBooks
  indexStartBooks = indexStartConstBooks
  indexEndBooks = indexEndConstBooks
  htmlDataSubBooks = htmlDataBooks.substring(indexStartBooks, indexEndBooks)

  for (let index = 0; index < bookTitle.length; index++) {
    indexStartBooks = htmlDataBooks.search('src="')
    indexEndBooks = htmlDataBooks.indexOf('" /></a>', indexStartBooks + 5)
    resultBooks = htmlDataBooks.substring(indexStartBooks + 5, indexEndBooks)
    htmlDataSubBooks = htmlDataBooks.substring(indexStartBooks, indexEndBooks)
    htmlDataBooks = htmlDataBooks.replace(htmlDataSubBooks, '')
    imageURLBooks = imageURLBooks.replace(resultBooks, '')
    imageURLBooks = imageURLBooks + resultBooks + ';'
  }
  imageURLBooks = imageURLBooks + '****XY'
  for (let index = 0; index < bookTitle; index++) {
    imageURLBooks = imageURLBooks.replace(',">', '')
    imageURLBooks = imageURLBooks.replace('\n', '')
    imageURLBooks = imageURLBooks.replace(',,', ',')
    imageURLBooks = imageURLBooks.replace(';;', ';')
  }

  indexStartBooks = imageURLBooks.search('booksBody">')
  indexEndBooks = imageURLBooks.indexOf('****XY', indexStartBooks)
  resultBooks = imageURLBooks.substring(indexStartBooks, indexEndBooks)

  imageURLBooks = imageURLBooks.replace(resultBooks, '')
  imageURLBooks = imageURLBooks.replace('****XY', '')

  const bookData = bookTitle.concat(imageURLBooks)
  console.log(bookData)

  const allData = bookData  
  res.send(allData)

})

module.exports = router