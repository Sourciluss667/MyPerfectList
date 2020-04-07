const User = require('../models/user_model');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function postSigin(req, res) {
  if (req.session.userId) {
    res.status(200).send("Already authenticated");
    return;
  }
  // on vérifie l'email et le mot de passe de l'utilisateur
  let user = await User.getByEmail(req.body.email, ["id", "name"]);

  // si on a trouvé un utilisateur correspondant, alors on sauvegarde son ID
  // dans l'objet req.session
  if (user) {
    res.json("user already exites!");
    return;
  }
  user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.name = req.body.name;
  user.username = req.body.username;
  user = await User.create(user);
  if (user && user.id) {
    res.status(200).send("Your Acount is created succesfully!");
    return;
  }
  // si on n'a pas trouvé d'utilisateur, alors on retourne une erreur 401 (unauthorized)
  res.status(401).send("Unknown email or password");
}

module.exports = postSigin;
