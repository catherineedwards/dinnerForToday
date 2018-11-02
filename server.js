const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/routes')

const server = express()

// Middleware
server.use(express.static((__dirname + '/public')));

server.engine('hbs', hbs({
    defaultLayout:'main',
    extname:'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)

module.exports = server
