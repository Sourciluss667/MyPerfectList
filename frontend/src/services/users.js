/**
 * HTTP request calls to the backend server
 */
const SERVER_URL = 'http://localhost:4200'

function login (object) {
  return fetch(`${SERVER_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  })
}
function siginUp (user) {
  return fetch(`${SERVER_URL}/users/sigin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}
function getCurrentUser () {
  return fetch(`${SERVER_URL}/users`)
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      return data
    })
}

export { login, siginUp, getCurrentUser }
