const superagent = require('superagent')
// const malScraper = require('mal-scraper')
const jwt = require('jsonwebtoken')
const jwtKey = 'phanio-0123@PH2020'
const jwtExpirySeconds = 300000
const agent = superagent.agent()
// var fetch = require('node-fetch')

// Create a token from a payload
async function createToken(payload) {
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
async function searchAnime(req, res) {
    const malUserName = req.params.maluser
    const bdOption = req.params.bdOption
    console.log(malUserName)
    try {
        if (bdOption === mangalist || bdOption === animelist) {
            const jsonResponse = await agent.get(`https://myanimelist.net/${bdOption}/${malUserName}/load.json?status=7&offset=0`)
            const token = await createToken({malUserName})
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

async function searchAnimeUsingToken(req, res) {
    const bdOption = req.params.bdOption
    const token = req.params.token
    try {
        if (! token) {
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
async function authToMAL(req, res) {
    let {username, password, newReq} = req.params
    console.log('user==', username, password)
    if (newReq === 1) {
        username = await jwt.verify(username, jwtKey)
        password = await jwt.verify(password, jwtKey)
    }
    let html = await agent.get('https://myanimelist.net/login.php?from=%2F')
    html = html.text
    let indexStart = html.search('<meta name=\'csrf_token\'')
    let indexEnd = html.indexOf('\'>', indexStart)
    let result = html.substring(indexStart, indexEnd + 2)
    // console.log(result)
    indexStart = result.search('content=\'')
    indexEnd = result.indexOf('\'>', indexStart)
    result = result.substring(indexStart + 9, indexEnd)
    // console.log(result)

    let {statusCodeMAL, malSessionId} = await agent.post('https://myanimelist.net/login.php?from=%2F').send({
        user_name: username,
        password,
        csrf_token: result,
        cookie: 1,
        submit: 1,
        sublogin: 'Login'
    }).then(resp => {
        console.log(resp.req._header)
        return {statusCodeMAL: resp.req.res.statusCode, malSessionId: resp.req._header}

    }).catch(err => {
        console.log(err)
        return res.send({statusCodeMAL: 401})
    })
    if (statusCodeMAL === 200) {
        malSessionId = malSessionId.split('MALSESSIONID=')
        malSessionId = malSessionId[1].split(';')
        malSessionId = malSessionId[0]
        console.log(malSessionId)
        const MAL_SESSION_ID_TOKEN = await createToken({malSessionId})
        const MAL_USER_TOKEN = await createToken({username})
        const MAL_PS_ID_TOKEN = await createToken({password})
        return res.send({statusCodeMAL, MAL_SESSION_ID_TOKEN, MAL_USER_TOKEN, MAL_PS_ID_TOKEN})
    }
    return res.send({statusCodeMAL: 401})

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

async function getAnimeSuggestion(req, res) {
    console.log(req.params.MAL_SESSION_ID_TOKEN)

    const html = await agent.get('https://myanimelist.net/addtolist.php?hidenav=1').send({
        cookie: {
            MALHLOGSESSID: req.params.MAL_SESSION_ID_TOKEN
        }
    })

    console.log(html)

    return res.send(html)
}

module.exports = {
    searchAnime,
    searchAnimeUsingToken,
    authToMAL,
    getAnimeSuggestion

}
