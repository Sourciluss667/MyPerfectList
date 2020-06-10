const superagent = require('superagent')
// const malScraper = require('mal-scraper')
const jwt = require('jsonwebtoken')
const jwtKey = 'phanio-0123@PH2020'
const jwtExpirySeconds = 300000
const agent = superagent.agent()
// var fetch = require('node-fetch')

// Create a token from a payload
async function createToken (payload) {
  const token = await jwt.sign(payload, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
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
  try {
    if (bdOption === mangalist || bdOption === animelist) {
      const jsonResponse = await agent.get(`https://myanimelist.net/${bdOption}/${malUserName}/load.json?status=7&offset=0`)
      const token = await createToken({ malUserName })
      await res.cookie('token', token, {
        maxAge: jwtExpirySeconds * 1000
      })
      res.status(200).send(jsonResponse.text)
    } else {
      res.status(401).send('No match option')
    }
  } catch (err) {
    console.error(err)
    res.status(401).send(err)
  }
}

async function searchAnimeUsingToken (req, res) {
  const bdOption = req.params.bdOption
  const token = req.cookies.token
  try {
    if (!token) {
      return res.status(401).end()
    }
    const payload = await jwt.verify(token, jwtKey)
    if (bdOption === mangalist || bdOption === animelist) {
      const jsonResponse = await agent.get(`https://myanimelist.net/${bdOption}/${
                payload.malUserName
            }/load.json?status=7&offset=0`)
      res.send(jsonResponse.text)
    } else {
      res.status(401).send('No match option')
    }
  } catch (err) {
    console.error(err)
    res.error.send(err)
  }
}

/**
 * authentification MAL using jwt
 * @param {Http} req
 * @param {Http} res
 */
async function authToMAL (req, res) {
  const { username, password } = req.params
  console.log('user==', username, password)
  // try {
  // const tk1 = await createToken({username})
  // const tk2 = await createToken({password})
  // const url = 'https://myanimelist.net/login'
  // var myInit = {
  //    method: 'POST',
  //    action : 'https://myanimelist.net/login.php?from=%2F',
  //    body: JSON.stringify({ username, password })
  // }
  /*  console.log('pas==', username)
    agent.post('https://myanimelist.net/login.php', {
      method: 'POST',
      headers: {

      },
      body: JSON.stringify({ username, password })
    }).then(res => console.log(res)).catch(err => console.log(err)) */

  let html = await agent.get('https://myanimelist.net/login.php?from=%2F')

  // console.log(html.text)
  html = html.text
  let indexStart = html.search('<meta name=\'csrf_token\'')
  let indexEnd = html.indexOf('\'>', indexStart)
  let result = html.substring(indexStart, indexEnd + 2)
  // console.log(result)
  indexStart = result.search('content=\'')
  indexEnd = result.indexOf('\'>', indexStart)
  result = result.substring(indexStart + 9, indexEnd)
  // console.log(result)

  const authInfo = await agent.post('https://myanimelist.net/login.php?from=%2F').send({
    user_name: username,
    password,
    csrf_token: result,
    cookie: 1,
    submit: 1,
    sublogin: 'Login'
  }).then(res => {
    console.log(res.text)
    return res.text
  }
  ).catch(err => {
    console.log(err)
    return err
  })

  return res.send(authInfo)
  // console.log(response)
  // .then(res => console.log(res))
  // .catch(err => console.log(err))

  // console.log(html)
  // let Api = malScraper.officialApi
  // const apiObj = new Api({ username, password })
  // apiObj.checkCredentials().then((data) => console.log(data)).catch((err) => console.log(err))
  // } catch (err) {
  // console.error(err)
  // res.error.send(err)
  // }
}

async function getAnimeSuggestion (req, res) {
  const html = await agent.get('https://myanimelist.net/addtolist.php?hidenav=1') 
    .send({
      cookie: { MALHLOGSESSID: 'd4ee9ef3d876bf38162d1b3e630f779f' }
    })

  console.log(html.text)

  // return res.send(result)
}

module.exports = {
  searchAnime,
  searchAnimeUsingToken,
  authToMAL,
  getAnimeSuggestion

}
