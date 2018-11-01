const express = require('express')
//const express = require('express-handlebars')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('main')
  
})

router.get('/recipes', (req, res) => {
  res.render('main')
})

router.get('/recipes', (req, res) => {
  res.send('this is working!')
 })
 router.get('/generateShoppingList', (req, res) => {
  res.render('main')
 })
 router.get('/edit/shoppinglist', (req, res) => {
  res.render('main')
 })
 

module.exports = router