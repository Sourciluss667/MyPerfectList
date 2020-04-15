const User = require('../models/user_model')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postSigin (req, res) {
  if (req.session.userId) {
    res.status(200).json('Already authenticated')
    return
  }
  // on vérifie l'email et le mot de passe de l'utilisateur
  let user = await User.getByEmail(req.body.email, ['id', 'name'])

  // si on a trouvé un utilisateur correspondant, alors on sauvegarde son ID
  // dans l'objet req.session
  if (user) {
    res.status(201).json('user already exites!')
    return
  }
  user = new User()
  user.name = req.body.name
  user.email = req.body.email
  user.password = req.body.password
  user.username = req.body.username
  user.birthdate = req.body.birthdate
  user = await User.create(user)
  if (user && user.id) {
    res.status(200).json('The account is created successfully!')
    return
  }
  res.status(401).json('System error')
}

module.exports = postSigin
