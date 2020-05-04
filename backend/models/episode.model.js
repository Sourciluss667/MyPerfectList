const PostgresStore = require('../utils/PostgresStore.js')
class Episode {
  /** @type {Number} */
  id;
  /** @type {String} */
  summary;
  /** @type {String} */
  pictureURL;
  /** @type {Date} */
  creationDate;

  /** @param {{pictureURL: String, summary: String}} params */
  static async create (params) {
    const result = await PostgresStore.client.query({
      text: `INSERT INTO ${Episode.tabletitle} (summary,picture_URL , creation_date) VALUES (summary,picture_URL, creation_date)
        RETURNING *`,
      values: [params.summary, params.pictureURL, new Date()]
    })
    return result.rows[0]
  }

  /**
   * @returns {Promise<Episode[]>}
   */
  static async getAll () {
    const result = await PostgresStore.client.query({
      text: `SELECT * FROM ${Episode.tableName} ORDER BY id`
    })
    return result.rows
  }

  /**
    * @param {Number} id
    * @param {String} pictureURL
    * @param {String} summary */
  static async update (id, pictureURL, summary) {
    await PostgresStore.client.query({
      text: `UPDATE ${Episode.tableName} SET picture_URL = $2, summary= $3 WHERE id=$1`,
      values: [id, pictureURL, summary]
    })
  }
}

/** @type {String} */
Episode.tableName = 'episode'

module.exports = Episode
