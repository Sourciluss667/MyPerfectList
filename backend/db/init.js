const PostgresStore = require('../utils/PostgresStore')
const config = require('./config')
const pgtools = require('pgtools')

const initDbConfig = {
  host: config.host,
  password: config.password,
  port: config.port,
  user: config.user
}

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
      avatar_URL TEXT,
      imdb TEXT,
      rottenTomatoes TEXT,
      myAnimeList TEXT,
      rateYourMusic TEXT,
      goodreads TEXT
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
      user_id INTEGER REFERENCES users(id)
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

const initDB = async () => {
  try {
    await pgtools.dropdb(initDbConfig, config.database)
  } catch (err) {
    console.log("error but don't care")
  }
  try {
    await pgtools.createdb(initDbConfig, config.database)
  } catch (err) {
    console.log("error but don't care")
  }

  try {
    await PostgresStore.init()
    for (let i = 0; i < q.length; i++) {
      console.log(i, '==', q[i].query)
      await PostgresStore.client.query(q[i].query)
      console.log(`Table ${q[i].name} created successfully !`)
    }
    PostgresStore.close()
  } catch (e) {
    console.log(e)
  }
}

initDB()
