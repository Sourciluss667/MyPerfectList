const malScraper = require('mal-scraper')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function searchAnime (req, res) {
  const search = malScraper.search
  const type = 'anime'
  // Helpers for types, genres and list you might need for your research
  console.log(search.helpers)

  const result = await search.search(type, {
    // All optionnals, but all values must be in their relative search.helpers.availableValues.
    maxResults: 100, // how many results at most (default: 50)
    has: 250, // If you already have results and just want what follows it, you can say it here. Allows pagination!

    term: 'Sakura', // search term
    type: 0, // 0-> none, else go check search.helpers.availableValues.type
    status: 0, // 0 -> none, else go check https://github.com/Kylart/MalScraper/blob/master/README.md#series-statuses-references or search.helpers.availableValues.status
    score: 0, // 0-> none, else go check search.helpers.availableValues.score
    producer: 0, // go check search.helpers.availableValue.p.<type>.value
    rating: 0, // 0-> none, else go check search.helpers.availableValues.r
    startDate: {
      day: 12,
      month: 2,
      year: 1990
    },
    endDate: {
      day: 12,
      month: 2,
      year: 2015
    },
    genreType: 0, // 0 for include genre list, 1 for exclude genre list
    genres: [1] // go check search.helpers.availableValues.genres.<type>.value
  })
    .then(data => { return data })
    .catch(console.error)

  return res.send(result)
}

module.exports = searchAnime
