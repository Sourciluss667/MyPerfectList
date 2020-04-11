const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postLogin (req, res) {
  // si l'utilisateur est déjà connecté, alors on lui retourne Unauthorized
  if (req.session.userId) {
    res.status(401).json({ msg: 'Already authenticated' })
    return
  }
  // on vérifie l'email et le mot de passe de l'utilisateur
  console.log(req.body.password)
  const password = req.body.password
  const email = req.body.email
  const user = await User.verifyUser(email, password)

  // si on a trouvé un utilisateur correspondant, alors on sauvegarde son ID
  // dans l'objet req.session
  if (user) {
    req.session.userId = user.id
    res.json(user)
    return
  }

  // si on n'a pas trouvé d'utilisateur, alors on retourne une erreur 401 (unauthorized)
  res.status(401).json({ msg: 'Unknown email or password' })
}

function logOut (req, res) {
  if (req.session.userId) {
    req.session.destroy()
  }
}

module.exports = { postLogin, logOut }
