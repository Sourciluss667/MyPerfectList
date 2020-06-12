/**
 * HTTP request calls to the backend server
 */
import axios from 'axios'
const SERVER_URL = 'http://localhost:4200'


axios.defaults.withCredentials = true

export async function getCookie(cname) {
    const name = cname.trim() + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log('caaa==' + decodedCookie)
    let ca = decodedCookie.split(';');
    console.log('ca==' + ca)
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        c = c.trim();
        console.log('fff==' + c.startsWith(name))
        if (c.startsWith(name)) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};


export async function searchAnime(malUserName, bdOption) {
    try {
        const result = await axios.get(`${SERVER_URL}/animes/${malUserName}/${bdOption}`)
        if (result.status === 200) {
            const token = await getCookie('token-ph')
            console.log(token)
            await localStorage.setItem('MAL_USER_TOKEN', token)
            return result.data
        }
        return []
    } catch (error) {
        console.log(error)
    }
}
export async function searchAnimeUsingToken(token, bdOption) {
    const result = await axios.get(`${SERVER_URL}/animes/tokenusing/${token}/${bdOption}`)
    return result.data
}
// authentification with MAL account
export async function authMALJwt(username, password, newRequest) {
    const result = await axios.get(`${SERVER_URL}/animes/authToMALJWT/${username}/${password}/${newRequest}`).then( async (res) => {
        console.log(res)
        if (res.data.statusCodeMAL === 200) {
            await localStorage.setItem('MAL_USER_TOKEN', res.data.MAL_USER_TOKEN)
            await localStorage.setItem('MAL_SESSION_ID_TOKEN', res.data.MAL_SESSION_ID_TOKEN)
            await localStorage.setItem('MAL_PS_ID_TOKEN', res.data.MAL_PS_ID_TOKEN)
            return true
        }
        return false
    }).catch(err => {
        console.log(err)
        return false
    })
    return result
}
// get suggestion anime to add to the list
export async function getSuggestionAnime(MAL_SESSION_ID_TOKEN) {
    try {
        const result = await axios.get(`${SERVER_URL}/animes/suggestionAnime/${MAL_SESSION_ID_TOKEN}`)
        return result.data
    } catch (error) {
        console.log(error)
    }
}
