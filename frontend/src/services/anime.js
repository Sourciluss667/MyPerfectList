/**
 * HTTP request calls to the backend server
 */
import axios from 'axios'
const SERVER_URL = 'http://localhost:4200'


axios.defaults.withCredentials = true

export async function getCookie(cname) {
  const name = cname.trim() + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  console.log('caaa=='+decodedCookie)
  let ca = decodedCookie.split(';');
  console.log('ca=='+ca) 
  for(var i = 0; i <ca.length; i++) {
    let c = ca[i];
    c = c.trim(); 
    console.log('fff=='+c.startsWith(name))
    if (c.startsWith(name)) {
      return c.substring(name.length, c.length);
    }
  }   
  return "";
}

export async function searchAnime (malUserName, bdOption) {
  const result = await axios.get(`${SERVER_URL}/animes/${malUserName}/${bdOption}`)
  return result.data
}
export async function searchAnimeUsingToken (token,bdOption) { 
  const result = await axios.get(`${SERVER_URL}/animes/tokenusing/${token}/${bdOption}`)
  return result.data
}
export async function authMALJwt(username, password) {
const result = await axios.get(`${SERVER_URL}/animes/authToMALJWT/${username}/${password}`)
  return result.data
}
