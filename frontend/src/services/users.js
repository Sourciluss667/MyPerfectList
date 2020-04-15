/**
 * HTTP request calls to the backend server
 */
const SERVER_URL = 'http://localhost:4200'
import axios from 'axios'

axios.defaults.withCredentials = true

function login (user) {
  return axios.post(`${SERVER_URL}/users/login`, {
    'email': user.email,
    'password': user.password,
  })
}
function siginUp (user) { 
  return axios.post(`${SERVER_URL}/users/sigin`, {
    'username':user.username,
    'name':user.name,
    'email': user.email,
    'password': user.password,
    'birthdate':user.birthdate
  })
}
function logout () {
  return axios.get(`${SERVER_URL}/users/logout`, {
    method: 'GET'
  })
}

function getCurrentUser () {
  return axios.get(`${SERVER_URL}/users/current_user`)
    .then(resp => { 
      return resp.data;
    }) 
}

export { login, siginUp, getCurrentUser, logout }
