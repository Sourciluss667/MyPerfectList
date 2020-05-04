const config = require('./config')
const pg = require('pg')
const pgtools = require('pgtools')

const initDbConfig = {
  host: config.host,
  password: config.password,
  port: config.port,
  user: config.user
}

// Delete db
pgtools.dropdb(initDbConfig, config.database, (err, res) => {
  if (err) console.log(`${config.database} doesn't exist !`, err) // db n'existe pas
  else console.log(`${config.database} deleted successfully !`)

  // Create db
  pgtools.createdb(initDbConfig, config.database, (err, res) => {
    if (err) { // Error create db, exit
      console.log('Error : Create database fail', err)
      process.exit(-1)
    }

    console.log(`${config.database} created successfully !`)

    // Create tables
    const pool = new pg.Pool(config)

    const q = [
      {
        name: 'gender_enum',
        query: 'CREATE TYPE gender_enum AS ENUM (\'MALE\', \'FEMALE\', \'OTHER\')'
      },
      {
        name: 'users',
        query: `CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          username TEXT NOT NULL,
          password TEXT NOT NULL,
          email TEXT NOT NULL,
          birthdate DATE,
          creation_date DATE,
          gender gender_enum, 
          avatar_URL TEXT
        )`
      },
      {
        name: 'anime',
        query: `CREATE TABLE anime (
          id SERIAL PRIMARY KEY, 
          title TEXT NOT NULL,
          description TEXT, 
          picture_URL TEXT, 
          infos TEXT, 
          URL TEXT, 
          priority INTEGER, 
          is_watched BOOLEAN, 
          creation_date DATE,
          user_id INTEGER REFERENCES user(id)
        )`
      },
      {
        name: 'season',
        query: `CREATE TABLE season (
          id SERIAL PRIMARY KEY, 
          title TEXT NOT NULL,
          summary TEXT, 
          creation_date DATE,
          anime_id INTEGER REFERENCES anime(id)
        )`
      },
      {
        name: 'episode',
        query: `CREATE TABLE episode (
          id SERIAL PRIMARY KEY, 
          summary TEXT,
          picture_URL TEXT,
          creation_date DATE,
          season_id INTEGER REFERENCES season(id)
        )`
      }
    ]

    for (let i = 0; i < q.length; i++) {
      pool.query(q[i].query, (err, res) => {
        console.log(q[i])
        if (err) console.log(`Error create ${q[i].name} table ! `, err)
        else console.log(`Table ${q[i].name} created successfully !`)
      })
    }

    pool.end(() => {
      console.log('Close db connection !')
    })
  })
})
