const User = require('../models/user_model');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getCurrentUser (req, res) {
  // si l'utilisateur est déjà connecté, alors on lui retourne l'user
  if (req.session.userId) {
    const user = await User.getById(req.session.id);
    res.json(user);
    return;
  }
  res.json(null);
}

module.exports = getCurrentUser;
