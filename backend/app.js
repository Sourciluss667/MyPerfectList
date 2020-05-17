var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')
const session = require('express-session')
const config = require('./server.config.js')
const PostgresStore = require('./utils/PostgresStore')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var searchRouter = require('./routes/search')
var animeRouter = require('./routes/anime')
var imdbRouter = require('./routes/imdb')
var cors = require('cors')
var app = express()

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: config.URL_FRONTEND
}))
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))

// on initalise la connexion à la base de données
PostgresStore.init()
// PostgresStore.createUserAdmin()
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/search', searchRouter)
app.use('/animes', animeRouter)
app.use('/imdb', imdbRouter)

module.exports = app

// Goodreads API
const goodreads = require('goodreads-api-node')
const callbackURL = '/goodreads'
const myCredentials = {
  key: 'Ok9UBRmL17fcTvCbiLmQQ',
  secret: '1To17EVvXKaHkOxLPVqShzmwwFPT8wzGRsRZj2WfP4'
}
const gr = goodreads(myCredentials)
console.log(gr)
gr.initOAuth(callbackURL)
gr.getBooksByAuthor('175417')
  .then(console.log)
