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
        name: 'users',
        query: `CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          username TEXT NOT NULL,
          password TEXT NOT NULL,
          email TEXT NOT NULL,
          birthdate DATE,
          creationdate DATE,
          gender CHAR(1),
          IMDb TEXT,
          RottenTomatoes TEXT,
          MyAnimeList TEXT,
          Goodreads TEXT,
          RateYourMusic TEXT,
          customLists INT []
        )`
      },
      {
        name: 'customLists',
        query: `CREATE TABLE customLists (
          id SERIAL PRIMARY KEY,
          userId INT NOT NULL,
          name TEXT NOT NULL,
          data JSON
        )`
      },
      {
        name: 'listData',
        query: `CREATE TABLE listData (
          id SERIAL PRIMARY KEY,
          userId INT NOT NULL,
          listId INT NOT NULL,
          private BOOLEAN NOT NULL,
          data JSON
        )`
      }
    ]

    for (let i = 0; i < q.length; i++) {
      pool.query(q[i].query, (err, res) => {
        if (err) console.log(`Error create ${q[i].name} table !`)
        else console.log(`Table ${q[i].name} created successfully !`)
      })
    }

    pool.end(() => {
      console.log('Close db connection !')
    })
  })
})
