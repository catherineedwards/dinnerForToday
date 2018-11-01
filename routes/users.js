const express = require('express')
//const express = require('express-handlebars')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('main')
  
})

router.get('/recipes', (req, res) => {
  db.getRecipes(recipes => {
    res.render('main', recipe)
  })
})

// router.post('/recipes', (req, res) => {
//   res.send('this is working!')
//  })
 router.get('/generateShoppingList', (req, res) => {
  res.render('main')
 })
 router.get('/edit/shoppinglist', (req, res) => {
  res.render('main')
 })
 router.post('/edit/shoppinglist', (req, res) => {
  res.render('main', )
 })
 

module.exports = router