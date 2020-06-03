/**
 * HTTP request calls to the backend server
 */
import axios from 'axios'
const SERVER_URL = 'http://localhost:4200'

axios.defaults.withCredentials = true

function login (user) {
  return axios.post(`${SERVER_URL}/users/login`, {
    email: user.email,
    password: user.password
  })
}
function siginUp (user) {
  return axios.post(`${SERVER_URL}/users/sigin`, {
    username: user.username,
    name: user.name,
    email: user.email,
    password: user.password,
    birthdate: user.birthdate
  })
}
function logout () {
  return axios.get(`${SERVER_URL}/users/logout`)
}

function getCurrentUser () {
  return axios.get(`${SERVER_URL}/users/current_user`)
    .then(resp => {
      return resp.data
    })
}

function getUserByUsername (username) {
  return axios.get(`${SERVER_URL}/users/userbyusername/${username}`)
    .then(res => {
      return res.data
    })
}
function passwordLost (email) {
  return axios.get(`${SERVER_URL}/users/passwordlost/${email}`)
    .then(res => {
      return res.data
    })
}
function changeTokens (tokensObj) {
  let obj = {
    imdb: tokensObj.imdb,
    mal: tokensObj.mal,
    rym: tokensObj.rym,
    gd: tokensObj.gd,
    rt: tokensObj.rt
  }
  return axios.post(`${SERVER_URL}/users/changeTokens`, obj)
}

function changeAvatarUrl (url) {
  return axios.post(`${SERVER_URL}/users/changeAvatar`, {url: url})
}

function changeUsername (username) {
  return axios.post(`${SERVER_URL}/users/changeUsername`, { username })
}

function changeName (name) {
  return axios.post(`${SERVER_URL}/users/changeName`, { name })
}

export { login, siginUp, getCurrentUser, logout, getUserByUsername, passwordLost, changeTokens, changeAvatarUrl, changeName, changeUsername }
