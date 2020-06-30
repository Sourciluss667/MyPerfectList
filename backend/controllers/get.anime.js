const superagent = require('superagent')
const jwt = require('jsonwebtoken')
const jwtKey = 'phanio-0123@PH2020'
const jwtExpirySeconds = 3000000
const agent = superagent.agent()
const { addToMalList } = require('./postAnimeToMAL')
// const { parse } = require('js2xmlparser')
// var fetch = require('node-fetch')

// Create a token from a payload
async function createToken (payload) {
  const token = await jwt.sign(payload, jwtKey, {
    algorithm: 'HS256'
  })
  return token
}

const mangalist = 'mangalist'
const animelist = 'animelist'
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function searchAnime (req, res) {
  const malUserName = req.params.maluser
  const bdOption = req.params.bdOption
  console.log(malUserName)
  try {
    if (bdOption === mangalist || bdOption === animelist) {
      const jsonResponse = await agent.get(`https://myanimelist.net/${bdOption}/${malUserName}/load.json?status=7&offset=0`)
      const token = await createToken({ malUserName })
      await res.cookie('token-ph', token, {
        maxAge: jwtExpirySeconds * 1000
      })
      res.status(200).send(jsonResponse.text)
    } else {
      res.status(401).send('No match option')
    }
  } catch (err) {
    console.log(err)
    res.status(401).send(err)
  }
}

async function searchAnimeUsingToken (req, res) {
  const bdOption = req.params.bdOption
  const token = req.params.token
  try {
    if (!token) {
      return res.status(400).end()
    }
    const payload = await jwt.verify(token, jwtKey)
    if (bdOption === mangalist || bdOption === animelist) {
      const jsonResponse = await agent.get(`https://myanimelist.net/${bdOption}/${payload.malUserName}/load.json?status=7&offset=0`)

      res.status(200).send(jsonResponse.text)
    } else {
      res.status(400).send('No match option')
    }
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad request')
  }
}

/**
 * authentification MAL using jwt
 * @param {Http} req
 * @param {Http} res
 */
async function authToMAL (req, res) {
  let { username, password, newReq } = req.params
  console.log('user==', username, password)
  if (newReq === 1) {
    const payLoad1 = await jwt.verify(username, jwtKey)
    const payLoad2 = await jwt.verify(password, jwtKey)
    username = payLoad1.malUserName
    password = payLoad2.malPassword
  }
  const { statusCodeMAL } = await logToMALCount(username, password)
  if (statusCodeMAL === 200) {
    const malUserName = username
    const malPassword = password
    const MAL_USER_TOKEN = await createToken({ malUserName })
    const MAL_PS_ID_TOKEN = await createToken({ malPassword })
    return res.send({ statusCodeMAL, MAL_USER_TOKEN, MAL_PS_ID_TOKEN })
  }
  return res.send({ statusCodeMAL: 401 })
}

/**
 * authentification to mal account
 * @param {String} username
 * @param {String} password
 */
async function logToMALCount (username, password) {
  let html = await agent.get('https://myanimelist.net/login.php')
  html = html.text
  let indexStart = html.search('<meta name=\'csrf_token\'')
  let indexEnd = html.indexOf('\'>', indexStart)
  let result = html.substring(indexStart, indexEnd + 2)
  indexStart = result.search('content=\'')
  indexEnd = result.indexOf('\'>', indexStart)
  result = result.substring(indexStart + 9, indexEnd)
  result = await agent.post('https://myanimelist.net/login.php')
    .field('user_name', username)
    .field('password', password)
    .field('cookie', 1)
    .field('sublogin', 'Login')
    .field('submit', 1)
    .field('csrf_token', result)
    .then(resp => {
      console.log('res code==', resp.res)
      let malSessionId = resp.res.req._header
      // let malLogId = resp.res.req._header
      const verification = (resp.res.text !== 'undefined') ? !!resp.text.match(/loginform/i) || !!resp.text.match(/loginUserName/i) : true

      const statusCodeMAL = verification ? 400 : resp.res.statusCode
      malSessionId = malSessionId.split('MALSESSIONID=')
      malSessionId = malSessionId[1].split(';')
      malSessionId = malSessionId[0]
      return { statusCodeMAL, malSessionId }
    }).catch(err => {
      console.log(err)
      return { statusCodeMAL: 401, malSessionId: '' }
    })
  console.log(result)
  return result
}

async function getAnimeSuggestion (req, res) {
  const { userToken, malPassword } = req.body
  try {
  // authentication
    const payload = await jwt.verify(userToken, jwtKey)
    const payload1 = await jwt.verify(malPassword, jwtKey)
    const { statusCodeMAL, malSessionId } = await logToMALCount(payload.malUserName, payload1.malPassword)
    if (statusCodeMAL === 200) {
      const cookie = `MALSESSIONID=${malSessionId}; is_logged_in=1;`

      let html = await agent.get('https://myanimelist.net/addtolist.php?hidenav=1')
        .set('Cookie', cookie)
        .then(res => {
          return res
        }).catch(err => {
          console.log(err)
          return ''
        })
      if (!html) {
        return res.send({ statusCode: 401, msg: 'Authentication failled' })
      }
      html = html.text
      const indexStart = html.search('data-initial-data=')
      const indexEnd = html.indexOf('">', indexStart)
      let result = html.substring(indexStart + 21, indexEnd - 2)
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
        let elAnimeNumEpisodes = result[result.length - 1].replace(':', '')
        elAnimeNumEpisodes = elAnimeNumEpisodes.trim() !== '' ? parseInt(elAnimeNumEpisodes) : 0
        dataResult[index] = {
          anime_title: elAnimeTitle,
          anime_num_episodes: elAnimeNumEpisodes,
          anime_id: idAnime,
          anime_url: elAnimeUrl,
          anime_image_path: elAnimeImagePath
        }
      }
      return res.send({ statusCode: 200, dataResult })
    }
    return res.send({ statusCode: 401, msg: 'Authentication failled' })
  } catch (err) {
    console.log(err)
    res.send({ statusCode: 401, msg: 'Authentication failled' })
  }
}
/*
async function getAnimeSuggestion (req, res) {
  const { malSessionToken, userToken, malPassword } = req.body
  try {
    console.log(userToken)
    console.log(malPassword)
    console.log(malSessionToken)
    const payload = await jwt.verify(malSessionToken, jwtKey)
    const cookie = `MALSESSIONID=${payload.malSessionId}; is_logged_in=1;`
    const html = await agent.get('https://myanimelist.net/addtolist.php?hidenav=1')
      .set('Cookie', cookie)
      .then(res => {
        return res
      }).catch(err => {
        console.log('error===', err)
        return ''
      })
    if (!html) {
      return res.send([])
    }
    console.log('ffff====', html)
    let indexStart = html.search('data-initial-data=')
    let indexEnd = html.indexOf('">', indexStart)
    let result = html.substring(indexStart, indexEnd + 2)
    indexStart = result.search('data-items=')
    indexEnd = result.indexOf('">', indexStart)
    result = result.substring(indexStart + 14, indexEnd - 3)
    console.log('result==', result)
    result = result.split('},{')
    result = result.filter(e => e.trim() !== '')
    const dataList = [...result]
    const tmp = []
    const dataResult = []
    for (let index = 0; index < dataList.length; index++) {
      result = dataList[index].split('&quot;')
      result = result.filter(e => e.trim() !== '' && e !== ',')
      tmp[index] = result
      let elStatut = result[1].replace(':', '').replace(',', '')
      elStatut = elStatut.trim() !== '' ? parseInt(elStatut) : 0
      let elScore = result[3].replace(':', '').replace(',', '')
      elScore = elScore.trim() !== '' ? parseInt(elScore) : 0
      const elAnimeTitle = result[12].trim()
      let elAnimeNumEpisodes = result[14].replace(':', '').replace(',', '')
      elAnimeNumEpisodes = elAnimeNumEpisodes.trim() !== '' ? parseInt(elAnimeNumEpisodes) : 0
      let elAnimeId = result[18].replace(':', '').replace(',', '')
      elAnimeId = elAnimeId.trim() !== '' ? parseInt(elAnimeId) : 0
      const elVideoUrl = result[33].trim()
      const elAnimeUrl = result[36].trim()
      const elAnimeImagePath = result[39].trim()

      dataResult[index] = {
        status: elStatut,
        score: elScore,
        anime_title: elAnimeTitle,
        anime_num_episodes: elAnimeNumEpisodes,
        anime_id: elAnimeId,
        video_url: elVideoUrl,
        anime_url: elAnimeUrl,
        anime_image_path: elAnimeImagePath
      }
      if (index === 50) {
        break
      }
    }

    res.send(dataResult)
  } catch (error) {
    console.log(error)
  }
} */
/**
 * Save anime to the list
 * @param {Http} req
 * @param {Http} res
 */
async function saveAnime (req, res) {
  let {
    idAnime,
    status,
    score,
    numEpis,
    startYear,
    startMonth,
    startDay,
    endYear,
    endMonth,
    endDay,
    numWatchedTimes,
    rewatchValue,
    userToken,
    malPassword,
    numEpisodes,
    add
  } = req.body
  idAnime = parseInt(idAnime)
  score = score.trim().length > 0 ? parseInt(score) : 0
  status = status.trim().length > 0 ? parseInt(status) : 0
  numEpis = numEpis.trim().length > 0 ? parseInt(numEpis) : 0
  startDay = startDay.trim().length > 0 ? parseInt(startDay) : 0
  startMonth = startMonth.trim().length > 0 ? parseInt(startMonth) : 0
  startYear = startYear.trim().length > 0 ? parseInt(startYear) : 0
  endYear = endYear.trim().length > 0 ? parseInt(endYear) : 0
  endDay = endDay.trim().length > 0 ? parseInt(endDay) : 0
  endMonth = endMonth.trim().length > 0 ? parseInt(endMonth) : 0
  numWatchedTimes = numWatchedTimes.trim().length > 0 ? parseInt(numWatchedTimes) : 0
  rewatchValue = rewatchValue.trim().length > 0 ? parseInt(rewatchValue) : 0
  try {
    if (!userToken.trim() || userToken == null || !malPassword.trim() || malPassword == null) {
      res.send({ status: 401, msg: 'User params is empty or null' })
      return
    }
    // verify user token
    // Data to send
    const obj = {
      idAnime,
      status,
      score,
      numWatchedEpisodes: numEpis,
      startYear,
      startMonth,
      startDay,
      endYear,
      endMonth,
      endDay,
      numWatchedTimes,
      rewatchValue,
      numEpisodes,
      add
    }

    // authentication
    const payload = await jwt.verify(userToken, jwtKey)
    const payload1 = await jwt.verify(malPassword, jwtKey)
    const { statusCodeMAL, malSessionId } = await logToMALCount(payload.malUserName, payload1.malPassword)
    if (statusCodeMAL === 200) {
      const result = await addToMalList(malSessionId, payload.malUserName, obj)
      if (result) {
        return res.send({ statusCode: 200, msg: 'Opération effectuée' })
      }
    }
    return res.send({ statusCode: 401, msg: 'Echec operation' })
  } catch (err) {
    return res.send({ statusCode: 401, msg: err })
  }
}

module.exports = {
  searchAnime,
  searchAnimeUsingToken,
  authToMAL,
  getAnimeSuggestion,
  saveAnime
}
