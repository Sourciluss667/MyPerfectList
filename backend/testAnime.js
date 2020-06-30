const superagent = require('superagent')
const agent = superagent.agent()

/**
 * Save anime to the list
 * @param {*} sessionId
 * @param {*} userName
 * @param {*} data
 */
async function addToMalList (sessionId, userName, data) {
  const cookie = await `MALSESSIONID=${sessionId}; is_logged_in=1;`
  try {
    let html = await agent.get(`https://myanimelist.net/animelist/${userName}`).set('Cookie', cookie)
    html = html.text
    let indexStart = html.search('<meta name=\'csrf_token\'')
    let indexEnd = html.indexOf('\'>', indexStart)
    let result = html.substring(indexStart, indexEnd + 2)
    result = result.trim()
    console.log(result)
    indexStart = result.search('content=\'')
    indexEnd = result.indexOf('\'>', indexStart)
    result = result.substring(indexStart + 9, indexEnd)
    const obj = {
      anime_id: data.idAnime,
      status: data.status,
      score: data.score,
      num_watched_episodes: data.numWatchedEpisodes,
      storage_value: 0,
      storage_type: 0,
      start_date: {
        year: data.startYear,
        month: data.startMonth,
        day: data.startDay
      },
      finish_date: {
        year: data.endYear,
        month: data.endMonth,
        day: data.endDay
      },
      num_watched_times: 0,
      rewatch_value: 0,
      csrf_token: result
    }
    const resp = await agent.post('https://myanimelist.net/ownlist/anime/add.json')
      .send(obj)
      .set('Cookie', cookie)
      .then(ress => {
        return ress
      }).catch(err => {
        console.log('bad===', err)
        return err
      })
    const verification = (resp.text !== 'undefined') ? !!resp.text.match(/Invalid submission/i) || !!resp.text.match(/Login/i) : true
    console.log('Invalid: ', !!resp.text.match(/Invalid submission/i) || !!resp.text.match(/Login/i))
    return !verification
  } catch (error) {
    console.log('error==', error)
    return false
  }
}
// saveAnime()
module.exports = {
  addToMalList
}
