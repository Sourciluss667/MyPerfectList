const PostgresStore = require('../utils/PostgresStore.js')

class Season {
  /** @type {Number} */
  id;
  /** @type {String} */
  title;
  /** @type {String} */
  summary;
  /** @type {Date} */
  creationDate;

  /** @param {{title: String, summary: String}} params */
  static async create (params) {
    const result = await PostgresStore.client.query({
      text: `INSERT INTO ${Season.tabletitle} (title,summary, creation_date) VALUES (title,summary, creation_date)
        RETURNING *`,
      values: [params.title, params.summary, new Date()]
    })
    return result.rows[0]
  }

  /**
   * @returns {Promise<Season[]>}
   */
  static async getAll () {
    const result = await PostgresStore.client.query({
      text: `SELECT * FROM ${Season.tableName} ORDER BY id`
    })
    return result.rows
  }

  /**
    * @param {Number} id
    * @param {String} title
    * @param {String} summary */
  static async update (id, title, summary) {
    await PostgresStore.client.query({
      text: `UPDATE ${Season.tableName} SET title = $2, summary= $3 WHERE id=$1`,
      values: [id, title, summary]
    })
  }
}

/** @type {String} */
Season.tableName = 'season'

module.exports = Season
