var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')
const session = require('express-session');
const config = require('./server.config.js');
const PostgresStore = require('./utils/PostgresStore')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

// on initalise la connexion à la base de données
PostgresStore.init();
//PostgresStore.createUserAdmin()
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: config.SESSION_SECRET }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app
