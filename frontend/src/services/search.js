/**
 * HTTP request calls to the backend server
 */
import axios from 'axios'
const SERVER_URL = 'http://localhost:4200'

axios.defaults.withCredentials = true

export async function userSearch (val) {
  const result = await axios.get(`${SERVER_URL}/search/users/${val}`)
  return result.data
}
