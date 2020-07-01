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

    let resp = ''
    if (data.add) {
      resp = await agent.post('https://myanimelist.net/ownlist/anime/add.json')
        .send(obj)
        .set('Cookie', cookie)
        .then(ress => {
          return ress
        }).catch(err => {
          console.log('bad===', err)
          return err
        })
    } else {
      resp = await agent.post('https://myanimelist.net/ownlist/anime/edit.json')
        .send(obj)
        .set('Cookie', cookie)
        .then(ress => {
          console.log(ress)
          return ress
        }).catch(err => {
          console.log('bad===', err)
          return err
        })
    }

    const verification = (resp.text !== 'undefined') ? !!resp.text.match(/Invalid submission/i) || !!resp.text.match(/Login/i) : true
    console.log('Invalid: ', !!resp.text.match(/Invalid submission/i) || !!resp.text.match(/Login/i))
    return !verification
  } catch (error) {
    console.log('error==', error)
    return false
  }
}

/* async function getAnimes () {
  // const cookie = await `MALSESSIONID=${malSessionId}; is_logged_in=1;`
  const cookie = 'MALSESSIONID=7rlv8thtvjde0cvog8husvihh4; is_logged_in=1;'
  try {
    let html = await agent.get('https://myanimelist.net/addtolist.php?hidenav=1')
      .set('Cookie', cookie)
      .then(res => {
        return res
      })
      html = html.text
      let indexStart = html.search('data-initial-data=')
      let indexEnd = html.indexOf('">', indexStart)
      let result = html.substring(indexStart+21, indexEnd  -2)
     result = result.split('},{')
     result = result.filter(e => e.trim() !== '')
const dataList = [...result]
const dataResult = []
for (let index = 0; index < dataList.length; index++) {
    result = dataList[index].split('&quot;')
    result = result.filter(e => e.trim() !== '' && e !== ',')
    let idAnime = result[1].replace(':', '').replace(',', '')
    idAnime = idAnime.trim() !== '' ? parseInt(idAnime) : 0
    const elAnimeTitle = result[4].trim()
    const elAnimeImagePath = result[10].trim()
    const elAnimeUrl = result[7].trim()
    let elAnimeNumEpisodes = result[result.length-1].replace(':', '')
    elAnimeNumEpisodes = elAnimeNumEpisodes.trim() !== '' ? parseInt(elAnimeNumEpisodes) : 0
    dataResult[index] = {
        anime_title: elAnimeTitle,
        anime_num_episodes: elAnimeNumEpisodes,
        anime_id: idAnime,
        anime_url: elAnimeUrl,
        anime_image_path: elAnimeImagePath
    }
}
console.log(dataResult.length)

  } catch (error) {
    console.log('error==', error)
  }
} */

// getAnimes()

// saveAnime()
module.exports = {
  addToMalList
}
