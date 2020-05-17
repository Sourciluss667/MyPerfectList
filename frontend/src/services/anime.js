/**
 * HTTP request calls to the backend server
 */
import axios from 'axios'
const SERVER_URL = 'http://localhost:4200'
const URL = 'https://myanimelist.net/animelist/username/load.json?status=7&offset=0'

axios.defaults.withCredentials = true

export async function searchAnime (malUserName) {
  const result = await axios.get(`${SERVER_URL}/animes/${malUserName}`)
  return result.data
}
