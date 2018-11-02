const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes,
  getRecipe,
  addShoppingList,
  deleteShoppingList
}

function getRecipes (testConn) {
  const conn = testConn || connection
  return conn('recipes').select()
 }

function getRecipe (id, testConn) {
  const conn = testConn || connection
  return conn('recipes').where('id', id).first()
}

function addShoppingList() {
  const conn = testConn || connection
  const id = req.body.ing_id
  return conn('shopping_list')
  .where({id})
  .insert({ing_id})
}

function deleteShoppingList(){
  const conn = testConn || connection
  const id = req.body.ing_id
  return conn ('shopping_list')
  .where({id})
  .del()
}
