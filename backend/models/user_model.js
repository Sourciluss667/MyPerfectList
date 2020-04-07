const PostgresStore = require('../utils/PostgresStore.js');
const bcrypt = require('bcrypt');

class User {
  /** @type {Number} */
  id;
  /** @type {String} */
  name;
  /** @type {String} */
  username;
  /** @type {String} */
  email;
  /** @type {String} */
  password;
  /** @type {Date} */
  birthdate;
  /** @type {CHAR} */
  gender;
  /** @type {String} */
  imdb;
  /** @type {String} */
  rottenTomatoes;
  /** @type {String} */
  myAnimeList;
  /** @type {String} */
  goodreads;
  /** @type {String} */
  rateYourMusic;
  /** @type {Array} */
  customLists;

  /**
   * @param {String} email
   * @param {String} password
   * @returns {Promise<User>}
   */
  static async verifyUser(email, password) {
    const result = await PostgresStore.pool.query({
      text: `SELECT * FROM ${User.tableName} WHERE email=$1`,
      values: [email]
    });
    // on récupère le premier résultat du SELECT, et on prend le password
    const currentPassword = result.rows[0].password;
    // comme ce password est hashé, on le compare via bcrypt avec le mot de passe
    // que l'utilisateur de la route de login a utilisé pour se connecter
    const isSame = await bcrypt.compare(password, currentPassword);
    // si c'est le même mot de passe, alors on retourne l'utilisateur
    if (isSame) {
      const user = result.rows[0];
      delete user.password; // on ne doit jamais renvoyer le mot de passe de l'utilisateur
      return user;
    } else {
      // sinon, on retourne null
      return null;
    }
  }

  /**
   * @param {String} email
   * @param {String[]} scope
   * @returns {Promise<User>}
   */
  static async getByEmail(email, scope) {
    // scope contient une liste comme 'id, email, firstname'
    // on utilise donc .join(', ') pour retourner une chaîne de caractères séparée par des virgules
    const fields = scope.join(', ');
    const result = await PostgresStore.pool.query({
      text: `SELECT ${fields} FROM ${User.tableName} WHERE email=$1`,
      values: [email]
    });
    return result.rows[0];
  }

  /**
   * @param {{email: String, firstname: String, lastname: String, password: String}} user
   * @return {Promise<User>}
   */
  static async create(user) {
    // lorsqu'on crée l'utilisateur, on ne stocke pas directement son mot de passe
    // en bases de données, mais on va le hasher
    const hashedPassword = await bcrypt.hash(user.password, 10);
    // lorsque le mot de passe a été transformé en une suite de symboles illisibles,
    // on le stocke avec le reste en base de données

    const result = await PostgresStore.pool.query({
      text: `INSERT INTO ${User.tableName} (name, username, email, password)
        VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [user.name, user.username, user.email, hashedPassword]
    });

    const userResult = result.rows[0];
    delete userResult.password; // on ne renvoie jamais le mot de passe de l'utilisateur
    return userResult;
  }


}

/** @type {String} */
User.tableName = 'users';

module.exports = User;
