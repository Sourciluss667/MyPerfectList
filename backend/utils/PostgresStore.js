const pg = require('pg');
const pgtools = require('pgtools');
const config = require('../db/config.js');

const bcrypt = require('bcrypt');

class PostgresStore {
  /** @type { import('pg').Pool } */
  pool;
  /** @type { import('pg').PoolClient } */
  client;
  
  async init () {
    this.pool = new pg.Pool({...config});
    this.client = await this.pool.connect();
  }

  close () {
    if (this.client) this.client.release();
    this.client = null;
  }

  async createUserAdmin(){
    const SERVER_CONFIG = require('../server.config');
    const hashedPassword = await bcrypt.hash(SERVER_CONFIG.PASSWORD, 10);
  
    const result= await this.pool.query({
      text: `INSERT INTO users (name, username, email, password)
        VALUES ($1, $2, $3, $4)`,
      values: [SERVER_CONFIG.ADMIN_NAME, SERVER_CONFIG.ADMIN_USERNAME, SERVER_CONFIG.ADMIN_EMAIL, hashedPassword]
    });
  }

}

module.exports = new PostgresStore();
